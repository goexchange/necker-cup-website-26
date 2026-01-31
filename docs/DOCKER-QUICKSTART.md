# 🐳 Docker Quick Reference

## Start Development (Hot Reload)
```bash
make dev
# Opens at http://localhost:5173
```

## Start Production (Nginx)
```bash
make prod
# Opens at http://localhost:8080
```

## Stop Everything
```bash
make down
```

## View Logs
```bash
make logs-dev    # Development logs
make logs-prod   # Production logs
```

## All Commands
```bash
make help
```

---

## Without Make

### Development
```bash
docker-compose up dev
```

### Production
```bash
docker-compose --profile production up prod
```

### Stop
```bash
docker-compose down
```
