# Artemis AI Website

This is a comprehensive, multilingual monorepo for Artemis AI, featuring:
- A Flask-based backend (API, AI chat integration).
- A Next.js-based frontend (main website UI).
- A collection of portfolio projects showcasing various web capabilities.

## Project Structure

The repository is organized as follows:

-   `backend/`: Contains the Python Flask application.
    -   `app.py`: Main Flask application entry point.
    -   `static/`: Static assets (CSS, JS, images) for the Flask app.
    -   `templates/`: Jinja2 HTML templates for the Flask app.
    -   `translations/`: Backend internationalization files (.po, .mo).
    -   `requirements.txt`: Python dependencies for the backend.
    -   `Dockerfile`: Dockerfile for building the backend service.
    -   `ops/`: Operational scripts/configurations (e.g., Nginx).
-   `frontend/`: Contains the Next.js React application.
    -   `pages/`: Next.js page components.
    -   `src/`: Source files (React components, utilities, etc.).
        -   `content/`: Markdown files for blog, courses, services.
    -   `public/`: Static assets for the Next.js app (images, fonts).
    -   `locales/`: Frontend internationalization JSON files.
    -   `package.json`: Node.js dependencies and scripts for the frontend.
-   `portfolio_projects/`: Contains standalone mock client web page projects (e.g., bizassist, easyreserve).
-   `archived_bootstrap_template/`: Contains the original Artemis-bootstrap HTML template.
-   `archive/`: Contains older or alternative site versions (e.g., artemis-ai-site).
-   `docs/`: Project documentation, including the roadmap.
-   `docker-compose.yml`: Defines services for local development (primarily the backend).
-   `.gitignore`: Specifies intentionally untracked files.
-   `README.md`: This file.
-   `roadmap.md`: Document outlining the project's organization and future plans.

## Quick Start

### Backend (Flask Service)

The backend service is containerized using Docker.

```bash
# Build and run the backend service
docker compose up --build
```
The Flask backend will typically be available at `http://localhost:5000`.

### Frontend (Next.js Development Server)

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Run the Next.js development server
npm run dev
```
The Next.js frontend will typically be available at `http://localhost:3000`.

## Features (Main Application)

- **Multilingual Support**: Seamlessly switch between English, Spanish, and French (handled by both backend and frontend).
- **AI Chat Integration**: Interact with an AI backend via a `deep_chat` component on the frontend.
- **Responsive Design**: Optimized for various devices.

## Development Details

### Backend (Flask)

To run the backend directly without Docker (ensure Python environment is set up):
```bash
# Navigate to the backend directory
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Run the Flask development server
flask run
```

**Backend Internationalization (i18n) - PyBabel**

Commands should be run from the `backend/` directory:
```bash
# Extract messages
pybabel extract -F babel.cfg -o messages.pot .

# Initialize a new language (e.g., Spanish 'es')
pybabel init -i messages.pot -d translations -l es

# Compile translations after updating .po files
pybabel compile -d translations
```

### Frontend (Next.js)

Development is typically done using the Next.js development server as shown in the Quick Start.
Frontend internationalization is managed via libraries like `next-translate` or `react-i18next`, configured in `frontend/src/i18n.js` and using JSON files in `frontend/locales/`.

## Portfolio Projects

The `portfolio_projects/` directory contains various standalone web applications. Each project has its own README and instructions. Refer to the specific project's documentation for details on how to run it.
