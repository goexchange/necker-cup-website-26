# Docker commands reference

All commands assume you're in the project folder:
```bash
cd ~/Documents/GitHub/necker-cup-website-26
```

---

## Start dev (Vite, hot reload) – recommended for coding

Clean start (stops/removes old container, rebuilds, runs):

```bash
cd ~/Documents/GitHub/necker-cup-website-26
docker compose down
docker stop necker-cup-web-dev 2>/dev/null; docker rm necker-cup-web-dev 2>/dev/null
docker build --target development -t necker-cup-web-dev .
docker run -d -p 5173:5173 --name necker-cup-web-dev necker-cup-web-dev
```

Then open **http://localhost:5173**.

---

## Stop / remove

Stop the dev container:
```bash
docker stop necker-cup-web-dev
```

Remove the dev container (after stopping):
```bash
docker rm necker-cup-web-dev
```

Stop everything from docker-compose:
```bash
docker compose down
```

List running containers (to find a name):
```bash
docker ps
```

---

## Run by image digest (if you have a sha256 image)

Map host 8080 → container 80:
```bash
docker run -p 8080:80 sha256:29b11ade417c07463642dabf2bd7ced53e264e72a7aac920bfaadb68002c0879
```
Open **http://localhost:8080**.

Map host 3000 → container 3000:
```bash
docker run -p 3000:3000 sha256:29b11ade417c07463642dabf2bd7ced53e264e72a7aac920bfaadb68002c0879
```
Open **http://localhost:3000**.

Stop a container by name (e.g. the one Docker gave it):
```bash
docker ps
docker stop <name>
docker rm <name>
```

---

## One-liner: full dev reset and run

```bash
cd ~/Documents/GitHub/necker-cup-website-26 && docker compose down && docker stop necker-cup-web-dev 2>/dev/null; docker rm necker-cup-web-dev 2>/dev/null && docker build --target development -t necker-cup-web-dev . && docker run -d -p 5173:5173 --name necker-cup-web-dev necker-cup-web-dev
```

Then open **http://localhost:5173**.
