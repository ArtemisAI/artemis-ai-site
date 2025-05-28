# Artemis-AI – Architecture Overview

This document captures the **target** architecture after the April 2025
re-organisation.  It complements the high-level roadmap and serves as a living
reference for developers, designers, and DevOps.

## 1. Repository layout

```
(root)
│  README.md
│  docker-compose.yml
│  .env.template
│
├─ backend/              ← Django 5 project (apps, templates, static)
│   ├─ requirements/     ← base.txt, dev.txt, prod.txt
│   ├─ Dockerfile        ← builds `web` image
│   └─ …
│
├─ frontend/             ← Next.js 14 marketing UI (existing code)
│   ├─ pages/
│   ├─ src/
│   └─ …
│
├─ ops/                  ← Nginx, k8s, Terraform, GitHub Actions, etc.
│
├─ docs/                 ← ADRs, architecture diagrams, decision records
│
└─ design/               ← Bootstrap Pug/SCSS sources (legacy styleguide)
```

## 2. Back-end (Django)

| Area          | Choice | Rationale |
|---------------|--------|-----------|
| Framework     | Django 5 | Built-in admin, i18n, ORM, Channels, security tool-chain |
| API           | Django REST Framework | Uniform JSON API & browsable UI |
| Realtime      | Channels 4 + Redis | WebSocket endpoint for Chatbot |
| Tasks         | Celery + Redis     | Long-running LLM requests |
| DB            | PostgreSQL 15      | JSONB, full-text search, PostGIS if needed |

### Key apps

* **core**      – navigation, flat pages, contact form
* **services**  – dynamic catalogue of company offerings
* **portfolio** – case studies, filterable gallery
* **chatbot**   – proxy & transcript store for Ollama

## 3. Front-end (Next.js & Chakra-UI)

The existing React/Chakra site is retained and moved into `/frontend`.  It
fetches content via Markdown during Phase 1, then gradually consumes the
Django REST API for dynamic sections.

Progressive enhancement with **htmx/alpine** is encouraged for quick wins.

## 4. LLM Integration (Ollama)

Ollama runs in its own container.  The Django `chatbot` app offers:

* `POST /api/chat/` – one-shot completions
* `GET  /ws/chat/`  – WebSocket streaming

Both endpoints enforce per-IP/user rate limits and log interactions for
analytics.

## 5. Dev/Prod workflow

1. `cp .env.template .env`
2. `docker compose up --build` – hot-reloads Django with `--reload` in dev.
3. `npm run dev` inside **/frontend** if working on Next.js only.

CI pipeline (GitHub Actions):

* Lint → Test → Build Docker image → Push → Deploy (CD optional).

## 6. Security & Compliance

* HTTPS enforced by Nginx/LetsEncrypt.
* Django `SECURE_*` flags enabled in production settings.
* CSP / Referrer-Policy / X-Frame-Options headers.
* GDPR-compliant logs (PII redaction).

## 7. Multilingual strategy

* UI strings: `django.po` files + `next-translate` in frontend.
* Database content: `django-modeltranslation` (per-field columns).
* SEO: `hreflang` tags and language-prefixed URLs (`/es/`, `/fr/`, …).

## 8. Open questions

* Which of the five SaaS demo templates must stay first-class citizens?
* Any external integrations (Stripe, HubSpot) to prioritise?

Please record decisions as ADRs in `/docs/adr/`.
