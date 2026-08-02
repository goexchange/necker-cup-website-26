---
name: agent-page-pick
description: >-
  Live UI edit mode for the Necker Cup website. Use when Rem toggles UX
  Designer (⌘⇧E), types /pick, mentions edit mode / div editor / page pick,
  references @.cursor/design-pick.md, or sends a pick with Source hint and
  Change requested from the picker panel.
---

# UX Designer — div editor → Agent

Rem inspects **real React pages** on the local Necker Cup Vite app, previews CSS live, and **one-clicks Send to Agent** for permanent code changes.

## Turn edit mode ON

**Dev only** — not on production. Run `npm run dev`.

| Method | Action |
|--------|--------|
| **⌘⇧E** | Toggle on/off (browser tab must have focus) |
| **URL** | `?agentPick=1` on any route |
| **Persist** | Stays on across routes until Exit or ⌘⇧E |

## Workflow (the loop)

1. **⌘⇧E** — UX Designer panel appears (drag header to move).
2. **Click** an element — orange outline pins it.
3. **Live CSS** (optional) — preview styles on the pinned element only.
4. **Describe the change** in the instruction box.
5. **Send to Agent** (or **⌘↵** while focus is in the panel) — opens Cursor composer with `/pick` + payload, copies clipboard, saves `.cursor/design-pick.md`.
6. Agent reads **Source hint**, implements in React/Tailwind, hard-refreshes browser.

## Pick payload (what Send produces)

```
/pick

Source hint: pages/HomePage.tsx:250:15
Route: /
Element: <div> div.group.relative
React: div -> HomePage -> ...
Change requested: make the badge smaller
Live preview CSS:
padding: 4px 8px;
```

- **Source hint** — primary edit target (`src/...` or `pages/...`)
- **Change requested** — Rem's instruction (omit if empty)
- **Live preview CSS** — translate to Tailwind/classes in source, not inline DOM styles

## Cursor recall

| Trigger | What happens |
|---------|----------------|
| **`/pick`** | Slash command → this skill; apply the pick in chat |
| **`@.cursor/design-pick.md`** | Latest saved pick from the panel |
| **Paste block with `Source hint:`** | Same as `/pick` |

Rule: `.cursor/rules/agent-page-pick.mdc` auto-loads this skill on pick-shaped messages.

## Agent behavior

1. **Read** Source hint file first — confirm component + line.
2. **Implement** in production code (Tailwind/React), minimal scope.
3. **Match** existing patterns on that route.
4. **Hard-refresh** the local Vite URL and confirm visually.
5. **Do not** leave live preview as inline styles.

## Fallbacks

- **Send to Agent** uses `postMessage` into Cursor — best-effort. If composer does not open, **Copy Prompt** and paste manually.
- Pick saves to `.cursor/design-pick.md` via Vite dev middleware (`POST /api/design-pick`).
