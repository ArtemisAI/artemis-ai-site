# Artemis AI Website

This is a comprehensive, multilingual Flask-based website designed for Artemis AI. It features a responsive frontend, an AI-powered chat backend, and robust internationalization capabilities.

Requirements

- Docker & Docker Compose

Quick Start

## Features

- **Multilingual Support**: Seamlessly switch between English, Spanish, and French.
- **AI Chat Integration**: Interact with an AI backend via a `deep_chat` component.
- **Responsive Design**: Optimized for various devices.

## Quick Start

```bash
docker compose up --build
```

Then visit http://localhost:5000

Project Structure

- app.py: Flask application entry point
- static/: CSS, JavaScript, and image assets
- templates/: Jinja2 HTML templates
- `translations/`: Houses localization files (`.po` and `.mo`) for English, Spanish, and French.
- `package.json` & `package-lock.json`: Manage frontend dependencies (e.g., `deep-chat`).

Development

```bash
pip install -r requirements.txt
flask run
```

Internationalization (i18n)

```bash
# Extract messages
pybabel extract -F babel.cfg -o messages.pot .

# Initialize a new language (e.g., Spanish)
pybabel init -i messages.pot -d translations -l es

# Update translations in translations/<lang>/LC_MESSAGES/messages.po

# Compile translations
pybabel compile -d translations
```

