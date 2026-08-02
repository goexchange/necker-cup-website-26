import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
type PickInfo = {
  tag: string;
  label: string;
  domPath: string;
  route: string;
  text: string;
  sourceHint: string;
  componentHint: string;
  rect: string;
};

const PICK_API = '/api/design-pick';
const PICK_STORAGE_KEY = 'agent-page-pick-enabled';
const PICK_LIVE_VIEW_KEY = 'agent-page-pick-live-view';
const PICK_POSITION_KEY = 'agent-page-pick-position';
const PICK_SHORTCUT_LABEL = '⌘⇧E';
const PANEL_WIDTH = 360;
const PANEL_MARGIN = 16;

type PanelPosition = { x: number; y: number };

function readStoredPosition(): PanelPosition | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(PICK_POSITION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PanelPosition;
    if (typeof parsed.x === 'number' && typeof parsed.y === 'number') {
      return clampPanelPosition(parsed.x, parsed.y, PANEL_WIDTH, 480);
    }
  } catch {
    // ignore invalid storage
  }
  return null;
}

function isPanelPositionVisible(position: PanelPosition, panelWidth = PANEL_WIDTH, panelHeight = 480) {
  if (typeof window === 'undefined') return true;
  return (
    position.x + panelWidth > PANEL_MARGIN &&
    position.y + 80 > PANEL_MARGIN &&
    position.x < window.innerWidth - PANEL_MARGIN &&
    position.y < window.innerHeight - PANEL_MARGIN
  );
}

function clampPanelPosition(
  x: number,
  y: number,
  panelWidth: number,
  panelHeight: number,
): PanelPosition {
  const maxX = Math.max(PANEL_MARGIN, window.innerWidth - panelWidth - PANEL_MARGIN);
  const maxY = Math.max(PANEL_MARGIN, window.innerHeight - panelHeight - PANEL_MARGIN);
  return {
    x: Math.min(Math.max(PANEL_MARGIN, x), maxX),
    y: Math.min(Math.max(PANEL_MARGIN, y), maxY),
  };
}

function isPickerNode(target: EventTarget | null): target is Element {
  return target instanceof Element && Boolean(target.closest('[data-agent-picker]'));
}

function tagFor(el: Element) {
  return `<${el.tagName.toLowerCase()}>`;
}

function shortText(el: Element) {
  return (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 120);
}

function selectorFor(el: Element) {
  let selector = el.tagName.toLowerCase();
  if (el.id) selector += `#${el.id}`;
  const testId = el.getAttribute('data-testid');
  const src = el.getAttribute('data-src');
  const designPart = el.getAttribute('data-design-part');
  const aria = el.getAttribute('aria-label');
  if (testId) selector += `[data-testid="${testId}"]`;
  else if (src) selector += `[data-src="${src}"]`;
  else if (designPart) selector += `[data-design-part="${designPart}"]`;
  else if (aria) selector += `[aria-label="${aria}"]`;
  else if (el.classList.length) selector += `.${Array.from(el.classList).slice(0, 2).join('.')}`;
  return selector;
}

function domPathFor(el: Element) {
  const parts: string[] = [];
  let cur: Element | null = el;
  while (cur && cur !== document.body && parts.length < 8) {
    if (isPickerNode(cur)) break;
    parts.unshift(selectorFor(cur));
    cur = (cur as HTMLElement).parentElement;
  }
  return parts.join(' > ');
}

function reactFiberFor(el: Element): any | null {
  const key = Object.keys(el).find((name) => name.startsWith('__reactFiber$'));
  return key ? (el as any)[key] : null;
}

function componentHintFor(el: Element) {
  let fiber = reactFiberFor(el);
  const names: string[] = [];
  let source = '';

  while (fiber && names.length < 5) {
    const type = fiber.elementType || fiber.type;
    const name = typeof type === 'function' ? type.displayName || type.name : typeof type === 'string' ? type : '';
    if (name && !names.includes(name)) names.push(name);
    if (!source && fiber._debugSource) {
      const { fileName, lineNumber, columnNumber } = fiber._debugSource;
      source = toProjectRelativeSource(`${fileName}:${lineNumber}:${columnNumber}`);
    }
    fiber = fiber.return;
  }

  return {
    componentHint: names.length ? names.join(' -> ') : 'Unknown React component',
    sourceHint: source,
  };
}

function buildPickInfo(el: Element, route: string): PickInfo {
  const rect = el.getBoundingClientRect();
  const sourceAttrs = [
    el.getAttribute('data-src') ? `data-src=${el.getAttribute('data-src')}` : '',
    el.getAttribute('data-design-part') ? `data-design-part=${el.getAttribute('data-design-part')}` : '',
    el.getAttribute('data-testid') ? `data-testid=${el.getAttribute('data-testid')}` : '',
  ].filter(Boolean);
  const hints = componentHintFor(el);

  return {
    tag: tagFor(el),
    label: selectorFor(el),
    domPath: domPathFor(el),
    route,
    text: shortText(el),
    sourceHint: sourceAttrs.join(' | ') || hints.sourceHint || 'No explicit source hint',
    componentHint: hints.componentHint,
    rect: `${Math.round(rect.width)}x${Math.round(rect.height)} @ ${Math.round(rect.left)},${Math.round(rect.top)}`,
  };
}

function routeForPick(pathname: string, search: string) {
  const params = new URLSearchParams(search);
  params.delete('agentPick');
  const qs = params.toString();
  return qs ? `${pathname}?${qs}` : pathname;
}

function toProjectRelativeSource(source: string) {
  const marker = '/src/';
  const idx = source.indexOf(marker);
  if (idx !== -1) return source.slice(idx + 1);
  return source.replace(/^.*go-exchange-hub-af821f2e\//, '');
}

function buildPrompt(pick: PickInfo, instruction: string, liveCss = '') {
  const lines = [
    '/pick',
    '',
    `Source hint: ${pick.sourceHint}`,
    `Route: ${pick.route}`,
    `Element: ${pick.tag} ${pick.label}`,
    `React: ${pick.componentHint}`,
    pick.text ? `Text: ${pick.text}` : null,
    liveCss.trim() ? `Live preview CSS:\n${liveCss.trim()}` : null,
    instruction.trim() ? `Change requested: ${instruction.trim()}` : null,
  ].filter((line): line is string => Boolean(line));

  return lines.join('\n');
}

function pushPromptToAgentChat(prompt: string) {
  const targets = [window.parent, window.top, window.opener].filter(
    (target): target is Window => Boolean(target && target !== window),
  );
  const messages: Array<Record<string, unknown>> = [
    { type: 'newComposerChat', userPrompt: prompt },
    { type: '__cursor_canvas_action', action: { type: 'newComposerChat', userPrompt: prompt } },
    { type: '__edit_mode_send_to_chat', prompt, userPrompt: prompt },
  ];

  for (const target of targets) {
    for (const message of messages) {
      try {
        target.postMessage(message, '*');
      } catch {
        // best-effort — only works in Cursor Simple Browser iframe
      }
    }
  }
}

async function copyPromptToClipboard(prompt: string) {
  try {
    await navigator.clipboard.writeText(prompt);
    return true;
  } catch {
    // fallback for older browsers / permission blocks
  }

  try {
    const area = document.createElement('textarea');
    area.value = prompt;
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.focus();
    area.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(area);
    return ok;
  } catch {
    return false;
  }
}

async function sendPick(pick: PickInfo, instruction: string, liveCss = '') {
  const prompt = buildPrompt(pick, instruction, liveCss);
  let pasted = false;
  let saved = false;

  try {
    const response = await fetch(PICK_API, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      body: prompt,
    });
    if (response.ok) {
      const data = (await response.json()) as { pasted?: boolean };
      pasted = Boolean(data.pasted);
      saved = true;
    }
  } catch {
    // dev API unavailable
  }

  const copied = await copyPromptToClipboard(prompt);
  pushPromptToAgentChat(prompt);

  return { prompt, pasted, copied, saved };
}

function statusForSendResult(result: { pasted: boolean; copied: boolean; saved: boolean }) {
  if (result.pasted) return 'Pasted into Cursor — review and press Enter.';
  if (result.copied) {
    return 'Copied! Click this Cursor chat input, then press ⌘V.';
  }
  if (result.saved) return 'Saved to .cursor/design-pick.md — type /pick @.cursor/design-pick.md in chat.';
  return 'Send failed — try Copy Prompt.';
}

function showSendFeedback(
  setStatus: (value: string) => void,
  setSendFlash: (value: string | null) => void,
  result: { pasted: boolean; copied: boolean; saved: boolean },
) {
  setStatus(statusForSendResult(result));
  if (!result.pasted && result.copied) {
    setSendFlash('Pick copied — click Cursor chat and press ⌘V');
    window.setTimeout(() => setSendFlash(null), 8000);
  } else {
    setSendFlash(null);
  }
}

export default function AgentPagePicker() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlEnabled = searchParams.get('agentPick') === '1';
  const storedEnabled =
    typeof window !== 'undefined' && window.localStorage.getItem(PICK_STORAGE_KEY) === '1';
  // Keep the production portal clean by default, but allow the intentional
  // Codex/Cursor shortcut or ?agentPick=1 to opt this browser into design mode.
  const enabled = urlEnabled || storedEnabled;
  const designerAvailable = import.meta.env.DEV;
  const [active, setActive] = React.useState(true);
  const [liveView, setLiveView] = React.useState(
    () => typeof window !== 'undefined' && window.localStorage.getItem(PICK_LIVE_VIEW_KEY) === '1',
  );
  const [hovered, setHovered] = React.useState<PickInfo | null>(null);
  const [pinned, setPinned] = React.useState<PickInfo | null>(null);
  const [instruction, setInstruction] = React.useState('');
  const [liveCss, setLiveCss] = React.useState('');
  const [status, setStatus] = React.useState('Hover and click a real page element.');
  const [sendFlash, setSendFlash] = React.useState<string | null>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);
  const dragOffsetRef = React.useRef({ x: 0, y: 0 });
  const hoverElRef = React.useRef<Element | null>(null);
  const pinnedElRef = React.useRef<Element | null>(null);
  const originalPinnedStyleRef = React.useRef<string | null>(null);
  const [position, setPosition] = React.useState<PanelPosition | null>(() => readStoredPosition());
  const [dragging, setDragging] = React.useState(false);

  const persistPosition = React.useCallback((next: PanelPosition | null) => {
    if (next) window.localStorage.setItem(PICK_POSITION_KEY, JSON.stringify(next));
    else window.localStorage.removeItem(PICK_POSITION_KEY);
  }, []);

  const resetPanelPosition = React.useCallback(() => {
    setPosition(null);
    persistPosition(null);
    setStatus('Panel moved back to top-right.');
  }, [persistPosition]);

  const startDrag = React.useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('button')) return;
    const panel = panelRef.current;
    if (!panel) return;

    event.preventDefault();
    const rect = panel.getBoundingClientRect();
    dragOffsetRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    setDragging(true);
    setPosition({ x: rect.left, y: rect.top });
  }, []);

  const applyLiveCss = React.useCallback(() => {
    const element = pinnedElRef.current as HTMLElement | null;
    if (!element || originalPinnedStyleRef.current === null) return;

    element.style.cssText = originalPinnedStyleRef.current;
    liveCss
      .split(';')
      .map((rule) => rule.trim())
      .filter(Boolean)
      .forEach((rule) => {
        const colonIndex = rule.indexOf(':');
        if (colonIndex === -1) return;
        const property = rule.slice(0, colonIndex).trim();
        const value = rule.slice(colonIndex + 1).trim();
        if (!property || !value) return;
        element.style.setProperty(property, value);
      });

    element.style.outline = '3px solid #f59e0b';
    element.style.outlineOffset = '2px';
  }, [liveCss]);

  React.useEffect(() => {
    applyLiveCss();
  }, [applyLiveCss, pinned]);

  const setPickMode = React.useCallback(
    (next: boolean) => {
      window.localStorage.setItem(PICK_STORAGE_KEY, next ? '1' : '0');
      const params = new URLSearchParams(searchParams);
      if (next) params.set('agentPick', '1');
      else params.delete('agentPick');
      setSearchParams(params, { replace: true });
      if (next) {
        setPosition((current) => {
          if (!current) return current;
          const clamped = clampPanelPosition(current.x, current.y, PANEL_WIDTH, 480);
          if (!isPanelPositionVisible(clamped)) {
            persistPosition(null);
            return null;
          }
          if (clamped.x !== current.x || clamped.y !== current.y) {
            persistPosition(clamped);
            return clamped;
          }
          return current;
        });
        setActive(true);
      }
    },
    [searchParams, setSearchParams, persistPosition],
  );

  const setLiveViewMode = React.useCallback((next: boolean) => {
    setLiveView(next);
    window.localStorage.setItem(PICK_LIVE_VIEW_KEY, next ? '1' : '0');
    setStatus(
      next
        ? 'Live view ON — clicks run the page; use Copy Prompt when ready.'
        : 'Inspect only — clicks pin elements without navigating.',
    );
  }, []);

  React.useEffect(() => {
    if (!designerAvailable) return;
    if (urlEnabled) window.localStorage.setItem(PICK_STORAGE_KEY, '1');
  }, [designerAvailable, urlEnabled]);

  React.useEffect(() => {
    if (!dragging) return;

    const onPointerMove = (event: PointerEvent) => {
      const panel = panelRef.current;
      const width = panel?.offsetWidth ?? PANEL_WIDTH;
      const height = panel?.offsetHeight ?? 480;
      setPosition(
        clampPanelPosition(
          event.clientX - dragOffsetRef.current.x,
          event.clientY - dragOffsetRef.current.y,
          width,
          height,
        ),
      );
    };

    const onPointerUp = () => {
      setDragging(false);
      setPosition((current) => {
        if (current) persistPosition(current);
        return current;
      });
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    document.body.style.userSelect = 'none';
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      document.body.style.userSelect = '';
    };
  }, [dragging, persistPosition]);

  React.useEffect(() => {
    if (!enabled) return;

    const onResize = () => {
      setPosition((current) => {
        if (!current) return current;
        const panel = panelRef.current;
        const next = clampPanelPosition(
          current.x,
          current.y,
          panel?.offsetWidth ?? PANEL_WIDTH,
          panel?.offsetHeight ?? 480,
        );
        if (next.x === current.x && next.y === current.y) return current;
        persistPosition(next);
        return next;
      });
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [enabled, persistPosition]);

  React.useEffect(() => {
    if (!enabled) return;
    const frame = window.requestAnimationFrame(() => {
      setPosition((current) => {
        if (!current) return current;
        const panel = panelRef.current;
        const width = panel?.offsetWidth ?? PANEL_WIDTH;
        const height = panel?.offsetHeight ?? 480;
        const clamped = clampPanelPosition(current.x, current.y, width, height);
        if (!isPanelPositionVisible(clamped, width, height)) {
          persistPosition(null);
          return null;
        }
        if (clamped.x === current.x && clamped.y === current.y) return current;
        persistPosition(clamped);
        return clamped;
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [enabled, persistPosition]);

  React.useEffect(() => {
    if (!designerAvailable) return;
    const onKeyDown = (event: KeyboardEvent) => {
      const isToggle =
        event.key.toLowerCase() === 'e' &&
        event.shiftKey &&
        (event.metaKey || event.ctrlKey);
      if (isToggle) {
        event.preventDefault();
        const currentlyEnabled =
          searchParams.get('agentPick') === '1' ||
          window.localStorage.getItem(PICK_STORAGE_KEY) === '1';
        setPickMode(!currentlyEnabled);
        setStatus(
          !currentlyEnabled
            ? 'Edit mode ON — click any element to inspect.'
            : 'Edit mode OFF — press ⌘⇧E again to reopen UX Designer.',
        );
        return;
      }

      if (!enabled) return;

      const isSend =
        event.key === 'Enter' &&
        (event.metaKey || event.ctrlKey) &&
        Boolean(pinned || hovered);
      if (!isSend) return;
      if (isPickerNode(event.target)) {
        event.preventDefault();
        const pick = pinned || hovered;
        if (!pick) return;
        void sendPick(pick, instruction, liveCss).then((result) =>
          showSendFeedback(setStatus, setSendFlash, result),
        );
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [designerAvailable, enabled, instruction, liveCss, pinned, hovered, searchParams, setPickMode]);

  React.useEffect(() => {
    if (!enabled || !active) return;

    const clearHover = () => {
      if (hoverElRef.current && hoverElRef.current !== pinnedElRef.current) {
        (hoverElRef.current as HTMLElement).style.outline = '';
      }
      hoverElRef.current = null;
    };

    const resolve = (event: MouseEvent) => {
      if (isPickerNode(event.target)) return null;
      const stack: Element[] = typeof document.elementsFromPoint === 'function'
        ? document.elementsFromPoint(event.clientX, event.clientY)
        : ([document.elementFromPoint(event.clientX, event.clientY)].filter(Boolean) as Element[]);
      for (const candidate of stack) {
        const element = candidate as any;
        if (isPickerNode(element)) continue;
        if (
          element === document.documentElement ||
          element === document.body ||
          element.getAttribute('id') === 'root'
        ) continue;
        return element as Element;
      }
      return null;
    };

    const blockPageInteraction = (event: MouseEvent) => {
      if (liveView) return;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    };

    const pinElement = (el: Element) => {
      if (pinnedElRef.current) {
        const previous = pinnedElRef.current as HTMLElement;
        if (originalPinnedStyleRef.current !== null) previous.style.cssText = originalPinnedStyleRef.current;
        previous.style.outline = '';
        previous.style.outlineOffset = '';
      }
      pinnedElRef.current = el;
      originalPinnedStyleRef.current = (el as HTMLElement).style.cssText;
      setLiveCss('');
      const targetElement = el as HTMLElement;
      targetElement.style.outline = '3px solid #f59e0b';
      targetElement.style.outlineOffset = '2px';
      const pick = buildPickInfo(el, routeForPick(location.pathname, location.search));
      setPinned(pick);
      setHovered(pick);
      return pick;
    };

    const onMove = (event: MouseEvent) => {
      const el = resolve(event);
      if (!el) return;
      if (el !== hoverElRef.current) {
        clearHover();
        hoverElRef.current = el;
        if (el !== pinnedElRef.current) {
          (el as HTMLElement).style.outline = '2px solid #ec4899';
          (el as HTMLElement).style.outlineOffset = '2px';
        }
      }
      setHovered(buildPickInfo(el, routeForPick(location.pathname, location.search)));
    };

    const onPointerDown = (event: MouseEvent) => {
      if (liveView) return;
      const el = resolve(event);
      if (!el) return;
      blockPageInteraction(event);
    };

    const onClick = (event: MouseEvent) => {
      const el = resolve(event);
      if (!el) return;
      if (!liveView) blockPageInteraction(event);
      pinElement(el);
      setStatus(
        liveView
          ? 'Element pinned (live view). Send to Agent when ready.'
          : 'Element pinned. Send to Agent when ready.',
      );
    };

    document.addEventListener('mousemove', onMove, true);
    document.addEventListener('mousedown', onPointerDown, true);
    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('mousemove', onMove, true);
      document.removeEventListener('mousedown', onPointerDown, true);
      document.removeEventListener('click', onClick, true);
      clearHover();
      if (pinnedElRef.current) {
        const element = pinnedElRef.current as HTMLElement;
        if (originalPinnedStyleRef.current !== null) element.style.cssText = originalPinnedStyleRef.current;
        element.style.outline = '';
        element.style.outlineOffset = '';
      }
    };
  }, [active, enabled, liveView, location.pathname, location.search, pinned]);

  // The production launcher is an admin design aid; ordinary members never see it.
  if (!designerAvailable) return null;

  if (!enabled) {
    return (
      <button
        type="button"
        data-agent-picker
        className="fixed bottom-4 left-4 z-[2147483646] rounded-full border border-slate-600 bg-slate-950/95 px-3 py-2 text-[11px] font-semibold text-slate-100 shadow-lg hover:bg-slate-900"
        onClick={() => {
          setPickMode(true);
          setStatus('Edit mode ON — click any element to inspect.');
        }}
        title="Open UX Designer (⌘⇧E)"
      >
        UX Designer · {PICK_SHORTCUT_LABEL}
      </button>
    );
  }

  const pick = pinned || hovered;

  return (
    <div
      ref={panelRef}
      data-agent-picker
      className={`fixed z-[2147483647] w-[360px] rounded-xl border border-slate-700 bg-slate-950/95 text-slate-100 shadow-2xl ${dragging ? 'select-none' : ''}`}
      style={
        position
          ? { left: position.x, top: position.y }
          : { right: PANEL_MARGIN, top: PANEL_MARGIN }
      }
    >
      <div
        data-agent-picker-drag-handle
        className={`flex items-center justify-between border-b border-slate-800 px-3 py-2 ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onPointerDown={startDrag}
      >
        <div className="min-w-0 pr-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-300">UX Designer</div>
          <div className="text-[11px] text-slate-400">
            drag header · {PICK_SHORTCUT_LABEL} toggle · ⌘↵ send
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            className="rounded-full bg-slate-800 px-2 py-1 text-[10px] font-semibold text-slate-300 hover:bg-slate-700"
            onClick={resetPanelPosition}
            title="Reset panel to top-right"
          >
            Reset
          </button>
          <button
            type="button"
            className="rounded-full bg-slate-800 px-2 py-1 text-[10px] font-semibold text-slate-300 hover:bg-slate-700"
            onClick={() => setPickMode(false)}
            title="Exit edit mode"
          >
            Exit
          </button>
          <button
          type="button"
          className={`rounded-full px-3 py-1 text-xs font-semibold ${active ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}
          onClick={() => {
            setActive((value) => !value);
            setPinned(null);
            setStatus(active ? 'Picker paused.' : liveView ? 'Pick ON — live click-through.' : 'Pick ON — inspect only.');
          }}
        >
          {active ? 'Pick ON' : 'Pick OFF'}
        </button>
        </div>
      </div>

      <div className="space-y-2 px-3 py-3 text-xs">
        {sendFlash ? (
          <div className="rounded-lg border border-amber-500/60 bg-amber-500/15 px-3 py-2 text-[11px] font-semibold leading-5 text-amber-100">
            {sendFlash}
          </div>
        ) : null}
        <fieldset className="rounded-lg border border-slate-800 bg-slate-900/60 p-2">
          <legend className="px-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
            Interaction
          </legend>
          <div className="mt-1 flex gap-3">
            <label className="flex cursor-pointer items-center gap-1.5 text-[11px] text-slate-200">
              <input
                type="radio"
                name="agent-pick-live-view"
                className="accent-blue-500"
                checked={!liveView}
                onChange={() => setLiveViewMode(false)}
              />
              Inspect only
            </label>
            <label className="flex cursor-pointer items-center gap-1.5 text-[11px] text-slate-200">
              <input
                type="radio"
                name="agent-pick-live-view"
                className="accent-blue-500"
                checked={liveView}
                onChange={() => setLiveViewMode(true)}
              />
              Live view
            </label>
          </div>
          <div className="mt-1 text-[10px] leading-4 text-slate-500">
            {liveView
              ? 'Clicks run the page. Pin an element, then Copy Prompt to paste into chat.'
              : 'Clicks only pin the element — no navigation.'}
          </div>
        </fieldset>
        <div className="rounded-lg bg-slate-900 p-2 font-mono text-[11px] leading-5 text-cyan-100">
          {pick ? (
            <>
              <div>{pick.tag} {pick.label}</div>
              <div className="text-slate-400">{pick.componentHint}</div>
              <div className="text-slate-500">{pick.sourceHint}</div>
            </>
          ) : (
            <div className="text-slate-400">Hover a page element...</div>
          )}
        </div>
        <textarea
          className="min-h-[72px] w-full rounded-lg border border-slate-700 bg-slate-900 p-2 text-xs text-slate-100 outline-none focus:border-blue-500"
          placeholder="Describe the change you want…"
          value={instruction}
          onChange={(event) => setInstruction(event.target.value)}
        />
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              Live CSS Preview
            </label>
            <button
              type="button"
              className="rounded bg-slate-800 px-2 py-1 text-[10px] font-semibold text-slate-300 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!pinned}
              onClick={() => {
                setLiveCss('');
                const element = pinnedElRef.current as HTMLElement | null;
                if (element && originalPinnedStyleRef.current !== null) {
                  element.style.cssText = originalPinnedStyleRef.current;
                  element.style.outline = '3px solid #f59e0b';
                  element.style.outlineOffset = '2px';
                }
                setStatus('Live CSS reset for selected element.');
              }}
            >
              Reset CSS
            </button>
          </div>
          <textarea
            className="min-h-[92px] w-full rounded-lg border border-slate-700 bg-slate-900 p-2 font-mono text-[11px] text-slate-100 outline-none focus:border-blue-500"
            placeholder={'background: #eff6ff;\npadding: 12px;\nborder-radius: 10px;'}
            value={liveCss}
            disabled={!pinned}
            onChange={(event) => {
              setLiveCss(event.target.value);
              setStatus('Live CSS applied locally. Send to Agent to make it permanent.');
            }}
          />
          <div className="text-[10px] leading-4 text-slate-500">
            Applies instantly to the selected element only. Send to Agent when it looks right.
          </div>
        </div>
        <button
          type="button"
          className="w-full rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-700"
          disabled={!pick}
          onClick={() => {
            if (!pick) return;
            void sendPick(pick, instruction, liveCss).then((result) =>
              showSendFeedback(setStatus, setSendFlash, result),
            );
          }}
        >
          Send to Agent
        </button>
        <button
          type="button"
          className="w-full rounded-lg bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-100 hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
          disabled={!pick}
          onClick={() => {
            if (!pick) return;
            const prompt = buildPrompt(pick, instruction, liveCss);
            navigator.clipboard.writeText(prompt).then(
              () => setStatus('Copied to clipboard — paste into chat if Send did not open composer.'),
              () => setStatus('Copy failed. Try Send to Agent again.'),
            );
          }}
        >
          Copy Prompt
        </button>
        <div className="text-[11px] text-slate-400">{status}</div>
      </div>
    </div>
  );
}
