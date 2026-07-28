import { createServer } from 'node:http';
import { spawn } from 'node:child_process';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root = resolve(__dirname, '..');
const publicDir = join(root, 'public');
const htmlPath = '/luca-faloni-necker-cup.html';
const outPath = join(publicDir, 'luca-faloni-necker-cup-2026.pdf');
const chrome =
  process.env.CHROME_PATH ||
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

function startServer() {
  return new Promise((resolveServer, reject) => {
    const server = createServer((req, res) => {
      const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
      const filePath = join(publicDir, urlPath === '/' ? htmlPath.slice(1) : urlPath);

      if (!filePath.startsWith(publicDir) || !existsSync(filePath) || statSync(filePath).isDirectory()) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }

      res.writeHead(200, { 'Content-Type': mime[extname(filePath)] || 'application/octet-stream' });
      createReadStream(filePath).pipe(res);
    });

    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      resolveServer({ server, port });
    });
    server.on('error', reject);
  });
}

function runChrome(url) {
  return new Promise((resolveRun, reject) => {
    const args = [
      '--headless=new',
      '--disable-gpu',
      '--no-pdf-header-footer',
      '--no-first-run',
      '--no-default-browser-check',
      `--print-to-pdf=${outPath}`,
      '--print-to-pdf-no-header',
      url,
    ];

    const child = spawn(chrome, args, { stdio: 'inherit' });
    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) resolveRun();
      else reject(new Error(`Chrome exited with code ${code}`));
    });
  });
}

const { server, port } = await startServer();
const url = `http://127.0.0.1:${port}${htmlPath}`;

try {
  console.log(`Rendering ${url}`);
  await runChrome(url);
  const sizeMb = (statSync(outPath).size / (1024 * 1024)).toFixed(2);
  console.log(`Wrote ${outPath} (${sizeMb} MB)`);
} finally {
  server.close();
}
