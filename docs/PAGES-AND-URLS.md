# Necker Cup 26 – Pages & URLs

## Base URLs

| Environment | Base URL |
|-------------|----------|
| **Local dev (Vite)** | http://localhost:5173/ |
| **Docker dev** | http://localhost:5173/ |
| **Docker production** | http://localhost:8080/ |
| **Vercel / production** | https://your-project.vercel.app/ (or your custom domain) |

---

## Home page + section anchors

These URLs scroll to a section on the **home** page. Use them from the base URL above.

| Page / section | Full URL (dev) | Hash only |
|----------------|----------------|-----------|
| **Home (top)** | http://localhost:5173/ | `/` |
| **About / Experience** | http://localhost:5173/#experience | `#experience` |
| **Packages** | http://localhost:5173/#packages | `#packages` |
| **Past pros & talent** | http://localhost:5173/#artists | `#artists` |
| **Gallery** | http://localhost:5173/#gallery | `#gallery` |
| **Sponsors** | http://localhost:5173/#sponsors | `#sponsors` |

**Examples (production on port 8080):**
- http://localhost:8080/
- http://localhost:8080/#experience
- http://localhost:8080/#packages
- http://localhost:8080/#artists
- http://localhost:8080/#gallery
- http://localhost:8080/#sponsors

---

## Full-page views (Agenda, Gallery, Sponsorship, Charity)

These are separate **full pages** opened from the nav. Right now they **do not** have their own URLs: the app uses internal state, so the address bar stays on the base URL (e.g. `http://localhost:5173/`) when you switch to them.

| Page | How to open | Shareable URL? |
|------|-------------|-----------------|
| **Agenda** | Nav → Agenda | No (state only) |
| **Gallery** | Nav → Gallery | No (state only) |
| **Sponsorship** | Nav → Sponsorship | No (state only) |
| **Charity** | Nav → Charity | No (state only) |
| **Packages** (full page) | Nav → Packages (from sub-pages) | No (state only) |
| **Talent** (full page) | Nav → Talent (from sub-pages) | No (state only) |

To get shareable URLs for these (e.g. `/#agenda`, `/#gallery`), the app would need hash-based routing (e.g. sync `currentPage` with `window.location.hash`).

---

## Standalone HTML (no build)

If you serve or open the standalone file directly:

| File | Typical URL |
|------|-------------|
| **Standalone (all-in-one)** | http://localhost:5173/index-standalone.html or `file:///path/to/index-standalone.html` |

Use the **Vite app** (base URL `/` and hashes above) for the correct, up-to-date content and production build.
