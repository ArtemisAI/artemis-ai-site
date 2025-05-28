# Artemis-AI backend (Django)

This directory will host the Django 5 project powering the main website, the
REST/WebSocket API, and integrations with the Ollama LLM server.

Scaffold checklist (Phase 1):

1.  `django-admin startproject artemis .`  (inside **backend/**).
2.  `python manage.py startapp core`  – static pages & navigation.
3.  Add `apps/` namespace:
    • `services` – dynamic service catalogue.
    • `portfolio` – case studies.
    • `chatbot`  – Ollama proxy layer.
4.  Configure multi-settings (settings/base.py, dev.py, prod.py).
5.  Install dependencies from `requirements/base.txt`.

Docker image is built via the **Dockerfile** in this folder.  `compose build`
expects the final `wsgi.py` at *artemis/wsgi.py*.

> See `/docs/ARCHITECTURE.md` for the big-picture design.
