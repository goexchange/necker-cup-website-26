/**
 * Dev-only: POST /api/design-pick writes the latest Agent Picker payload to
 * .cursor/design-pick.md and (on macOS) copies + pastes into the frontmost
 * Cursor window so Send to Agent works from Chrome/Safari, not only Simple Browser.
 */
import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import type { Plugin, ViteDevServer } from 'vite';

const PICK_PATH = '/api/design-pick';

function pickFilePath(root: string) {
  return path.join(root, '.cursor/design-pick.md');
}

function pasteIntoCursor(body: string): { pasted: boolean; error?: string } {
  if (process.platform !== 'darwin') {
    return { pasted: false, error: 'macOS only' };
  }

  try {
    const copy = spawnSync('pbcopy', { input: body, encoding: 'utf8' });
    if (copy.status !== 0) {
      return { pasted: false, error: 'pbcopy failed' };
    }

    const script = `
      tell application "Cursor" to activate
      delay 0.35
      tell application "System Events"
        keystroke "v" using command down
      end tell
    `;
    const paste = spawnSync('osascript', ['-e', script], { encoding: 'utf8' });
    if (paste.status === 0) return { pasted: true };

    const message = (paste.stderr || paste.stdout || '').trim();
    return { pasted: false, error: message || 'osascript failed' };
  } catch (err) {
    return { pasted: false, error: String(err) };
  }
}

function attachPickApi(server: ViteDevServer) {
  server.middlewares.use(PICK_PATH, (req, res, next) => {
    if (req.method === 'OPTIONS') {
      res.statusCode = 204;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.end();
      return;
    }

    if (req.method !== 'POST') {
      next();
      return;
    }

    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      try {
        const file = pickFilePath(server.config.root);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, body, 'utf8');
        const pasteResult = pasteIntoCursor(body);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          ok: true,
          path: '.cursor/design-pick.md',
          pasted: pasteResult.pasted,
          pasteError: pasteResult.error,
        }));
      } catch (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ ok: false, error: String(err) }));
      }
    });
  });
}

export function agentPagePickApiPlugin(): Plugin {
  return {
    name: 'agent-page-pick-api',
    configureServer(server) {
      attachPickApi(server);
    },
  };
}
