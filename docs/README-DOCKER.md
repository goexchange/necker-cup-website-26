# Docker Setup for Necker Cup Website

This project includes Docker configuration for both development and production environments.

## Prerequisites

- Docker Desktop installed (includes Docker and Docker Compose)
- No need to install Node.js or npm locally

## Quick Start

### Development Mode

```bash
# Start development server
make dev

# Or using docker-compose directly
docker-compose up dev
```

Access the site at: **http://localhost:5173**

### Production Mode

```bash
# Start production server
make prod

# Or using docker-compose directly
docker-compose --profile production up prod
```

Access the site at: **http://localhost:8080**

## Available Commands

Run `make help` to see all available commands:

```bash
make help
```

### Common Commands

| Command | Description |
|---------|-------------|
| `make dev` | Start development server (hot reload enabled) |
| `make prod` | Start production server with nginx |
| `make build-dev` | Build development Docker image |
| `make build-prod` | Build production Docker image |
| `make up-dev` | Start dev container in background |
| `make up-prod` | Start prod container in background |
| `make down` | Stop all containers |
| `make logs-dev` | Show development logs |
| `make logs-prod` | Show production logs |
| `make shell-dev` | Open shell in dev container |
| `make clean` | Remove all containers and images |
| `make rebuild-dev` | Rebuild dev container from scratch |
| `make status` | Show status of containers |

## Architecture

### Multi-Stage Build

The Dockerfile uses a multi-stage build with three targets:

1. **builder** - Build stage (currently minimal, ready for future Vite builds)
2. **development** - Runs Vite dev server with hot reload
3. **production** - Serves static files with nginx

### Development Container

- Based on `node:20-alpine`
- Mounts source code as volume for hot reload
- Exposes port 5173
- Runs `npm run dev`

### Production Container

- Based on `nginx:alpine`
- Serves static HTML and assets
- Includes security headers
- Gzip compression enabled
- Health check endpoint at `/health`
- Exposes port 80 (mapped to 8080 on host)

## Project Structure

```
.
├── Dockerfile           # Multi-stage Docker build
├── docker-compose.yml   # Docker Compose configuration
├── nginx.conf          # Nginx configuration for production
├── .dockerignore       # Files to exclude from Docker build
├── Makefile            # Convenient commands
└── README-DOCKER.md    # This file
```

## Environment Variables

The Supabase API keys are currently hardcoded in `index.html`. For production, consider:

1. Using environment variables
2. Moving secrets to a secure vault
3. Using Docker secrets for sensitive data

## Networking

Both containers are on the same Docker network (`necker-network`), making it easy to add additional services (database, API, etc.) in the future.

## Volume Mounts

Development mode uses volume mounts:
- `.:/app` - Source code (for hot reload)
- `/app/node_modules` - Anonymous volume to prevent overwriting

## Health Checks

Production container includes a health check:
- Endpoint: `http://localhost/health`
- Interval: 30 seconds
- Timeout: 3 seconds
- Retries: 3

Check health status:
```bash
docker ps
```

## Troubleshooting

### Port Already in Use

If ports 5173 or 8080 are already in use:

```bash
# Check what's using the port
lsof -i :5173
lsof -i :8080

# Change ports in docker-compose.yml
# For dev: change "5173:5173" to "3000:5173"
# For prod: change "8080:80" to "3000:80"
```

### Container Won't Start

```bash
# Check logs
make logs-dev
# or
make logs-prod

# Rebuild from scratch
make rebuild-dev
# or
make rebuild-prod
```

### Permission Issues

```bash
# On Linux, if you have permission issues:
sudo chown -R $USER:$USER .
```

## Production Deployment

For production deployment to cloud platforms:

### Using Docker Image

```bash
# Build production image
docker build --target production -t necker-cup:latest .

# Push to registry
docker tag necker-cup:latest your-registry/necker-cup:latest
docker push your-registry/necker-cup:latest
```

### Using Vercel (Current Setup)

The project is already configured for Vercel deployment. See `vercel.json`.

## Next Steps

- [ ] Move Supabase keys to environment variables
- [ ] Add database service to docker-compose (if needed)
- [ ] Set up CI/CD with Docker
- [ ] Add SSL/TLS for production
- [ ] Configure CDN for static assets

## Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Nginx Documentation](https://nginx.org/en/docs/)
