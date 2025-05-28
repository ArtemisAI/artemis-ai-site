# Artemis AI Website

This is a multilingual Flask-based website for Artemis AI.

Requirements

- Docker & Docker Compose

Quick Start

```bash
docker compose up --build
```

Then visit http://localhost:5000

Project Structure

- app.py: Flask application entry point
- static/: CSS, JavaScript, and image assets
- templates/: Jinja2 HTML templates
- translations/: Localization files for supported languages

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

