# Necker Cup Website

React + Vite + Tailwind site for the Necker Cup event, with optional Docker-based development and production runs.

## Stack

- **React** (TypeScript) + **Vite** + **Tailwind CSS**
- **Supabase** for form/backend data
- **Docker** for dev and production (optional)

## Quick start

### Without Docker

```bash
npm install
npm run dev
```

Open **http://localhost:5173**.

### With Docker

**Development (hot reload):**

```bash
make dev
# or: npm run docker:dev
```

Open **http://localhost:5173**.

**Production (Nginx):**

```bash
make prod
# or: npm run docker:prod
```

Open **http://localhost:8080**.

**Verify Docker setup:**

```bash
./verify-docker.sh
```

### Connection failed?

1. **Start Docker Desktop** – Make sure it’s running (whale icon in menu bar).
2. **Start the right mode** – In the project folder run:
   - Dev: `make dev` (leave the terminal open), then open **http://localhost:5173**
   - Prod: `make prod` (leave the terminal open), then open **http://localhost:8080**
3. **Use http (not https)** – Use `http://localhost:5173` or `http://localhost:8080`.
4. **Check containers** – Run `docker ps`; you should see `necker-cup-dev` or `necker-cup-prod` with status “Up”.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Vite dev server (local) |
| `npm run preview` | Vite preview (local) |
| `npm run docker:dev` | Dev server in Docker |
| `npm run docker:prod` | Production Nginx in Docker |
| `npm run docker:build:dev` | Build dev image |
| `npm run docker:build:prod` | Build prod image |
| `npm run docker:down` | Stop containers |
| `npm run docker:clean` | Stop and remove containers/volumes |

See **Makefile** for more Docker commands (`make help`).

## Project structure

- **`src/app/`** – React app: `App.tsx` (router), `pages/` (one page per section), `components/` (shared UI, Nav, Layout, ReservationForm), `context/`, `logos/`.
- **`docs/`** – Setup guides, Docker docs, Supabase, Vercel, troubleshooting.
- **`sql/`** – Supabase SQL scripts (tables, RLS, policies).

## Documentation

| Doc | Purpose |
|-----|---------|
| [docs/DOCKER-QUICKSTART.md](docs/DOCKER-QUICKSTART.md) | Docker commands quick reference |
| [docs/README-DOCKER.md](docs/README-DOCKER.md) | Full Docker guide |
| [docs/DOCKER-SETUP-COMPLETE.md](docs/DOCKER-SETUP-COMPLETE.md) | Docker setup summary |
| [docs/SETUP-INSTRUCTIONS.md](docs/SETUP-INSTRUCTIONS.md) | General setup |
| [docs/SUPABASE-SETUP.md](docs/SUPABASE-SETUP.md) | Supabase / backend |
| [docs/VERCEL-DEPLOYMENT.md](docs/VERCEL-DEPLOYMENT.md) | Deploying to Vercel |

## License

See [docs/ATTRIBUTIONS.md](docs/ATTRIBUTIONS.md) for attributions and license details.
