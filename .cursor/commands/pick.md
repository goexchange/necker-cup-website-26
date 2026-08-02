---
description: Apply a live UI pick from UX Designer — edit the Source hint file with Tailwind/React changes
---

# /pick — Agent Page Pick (div editor)

An element was selected on the Necker Cup website via UX Designer and needs a **permanent code change**.

## Load skill

Read **`.cursor/skills/agent-page-pick/SKILL.md`**.

If the message includes **`Source hint:`**, also read **`.cursor/design-pick.md`** when present (latest saved pick from the panel).

## Execute (minimal scope)

1. Open the **Source hint** file (`src/...tsx:line` or `pages/...tsx:line`) — primary edit target.
2. Read **Change requested** and **Live preview CSS** (if any).
3. Implement in **React + Tailwind** at that component — do not leave inline preview styles on the DOM.
4. Match existing page patterns on that route.
5. Hard-refresh `http://localhost:5180/` (or the active Vite port) in the browser and confirm the change.

## Reply

- What file you changed and why (1–3 sentences).
- Reminder: Cmd+Shift+R on the site tab if HMR missed it.

## Do not

- Rebuild unrelated UI.
- Treat live CSS as the final implementation — translate to source.
