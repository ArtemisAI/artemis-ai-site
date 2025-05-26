# Artemis-AI – Monorepo

This repository combines all Artemis-AI assets (marketing site, AI chatbot
backend, demo SaaS templates) into a single, maintainable code-base.

* `/frontend` – Next.js + Chakra-UI marketing website (multilingual)
* `/backend`  – Django 5 API, admin & WebSocket chat service
* `/ops`      – Docker-Compose, Nginx, deployment scripts
* `/design`   – Legacy Bootstrap/Pug sources (style-guide only)

Dev quick-start:

```bash
cp .env.template .env   # provide secrets & configs
docker compose up --build
# open http://localhost
```

Detailed architecture & roadmap in **docs/ARCHITECTURE.md**.
