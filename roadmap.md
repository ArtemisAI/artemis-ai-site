# Project Refactoring Roadmap

**Status: The initial project refactoring based on this roadmap has been substantially completed. This document now primarily serves as a record of the planned and executed changes, and for any future refactoring considerations.**

This document outlines a plan to reorganize and clean up the project repository. Based on the current structure, it appears there are several distinct parts within this single repository, leading to confusion and difficulty in navigation. This roadmap incorporates an analysis of the existing structure and proposes steps to organize the core components and handle the other parts.

## 1. Project Scope: Analysis and Decisions (Historical)

This section describes the state of the project *before* the refactoring.

**Analysis:** (Original analysis retained for history)
*   The directories `pages/`, `src/`, `public/`, `backend/`, `content/`, `locales/`, `translations/`, along with root files like `app.py`, `package.json`, `package-lock.json`, `requirements.txt`, appear to constitute the **primary web application** under active development. This structure suggests a Python backend combined with a frontend framework (likely Next.js).
*   `artemis-ai-site/` looks like a separate, possibly older, static website.
*   `Artemis-bootstrap/` appears to be source material or a build process for a theme/template.
*   `Artemis_Web_Portfolio/` contains multiple sub-directories, each looking like a distinct project or template (e.g., Next.js apps under `templates.artemis-ai.ca`). This is a collection of separate items.
*   `static/` is likely a redundant static asset directory given the presence of `public/`.

**Decisions:** (Original decisions retained for history)
*   The **Main Project** for refactoring is defined as the core application components.
*   `artemis-ai-site/` will be treated as a **Separate Project**.
*   `Artemis-bootstrap/` will be treated as **Source Material/Template**.
*   `Artemis_Web_Portfolio/` will be treated as a **Collection of Projects**.
*   `static/` is **Redundant**.

## 2. Implemented Project Structure

Based on the refactoring, the project now follows this logical structure:

```
/
├── backend/              # All backend code (Python Flask application, API)
│   ├── app.py            # Main Flask application file
│   ├── static/           # Static assets for Flask (e.g., CSS, JS from original root static)
│   │   ├── assets/
│   │   └── css/
│   ├── templates/        # Jinja2 HTML templates for Flask
│   ├── translations/     # Backend i18n files (.po, .mo)
│   ├── ops/              # Operational files (e.g., Nginx config)
│   ├── Dockerfile        # Dockerfile for the backend
│   ├── requirements.txt  # Python dependencies
│   ├── babel.cfg         # Babel configuration for i18n
│   └── ...               # Other backend files (e.g., gunicorn.conf.py)
├── frontend/             # All frontend application code (Next.js app)
│   ├── public/           # Static assets served directly by Next.js (images, fonts)
│   ├── src/              # Frontend source code (TypeScript/JavaScript)
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Next.js pages/routes
│   │   ├── utils/        # Frontend utilities
│   │   ├── styles/       # Frontend styles
│   │   ├── content/      # Markdown content (blog, courses, services)
│   │   ├── i18n.js       # Frontend i18n configuration
│   │   └── ...
│   ├── locales/          # Frontend localization files (e.g., JSON)
│   ├── package.json      # Frontend dependencies and scripts
│   └── ...
├── portfolio_projects/   # Standalone mock client web page projects
│   ├── bizassist/
│   ├── easyreserve/
│   └── ...
├── archived_bootstrap_template/ # Original Artemis-bootstrap HTML template
│   └── Artemis-bootstrap/
├── archive/                # Older or alternative site versions
│   └── artemis-ai-site/
├── docs/                   # Project documentation
├── .gitignore              # Main .gitignore
├── docker-compose.yml      # Docker Compose configuration
├── README.md               # Main project README
└── roadmap.md              # This document
```

**Rationale:**
*   Clearly separates `backend` and `frontend`.
*   Consolidates `content` (markdown) within the `frontend` source.
*   Organizes portfolio projects and archived templates separately.
*   Standardizes static asset locations for both Flask and Next.js.

## 3. Actionable Refactoring Tasks (Status Update)

These tasks were part of the initial refactoring plan.

### Phase 1: Isolation and Initial Structure
*   **Task 3.1: Handle Non-Core Directories:** - **COMPLETED**
    *   `artemis-ai-site/` moved to `archive/`.
    *   `Artemis-bootstrap/` moved to `archived_bootstrap_template/`.
    *   `Artemis_Web_Portfolio/templates.artemis-ai.ca/*` moved to `portfolio_projects/`.
*   **Task 3.2: Create Base Frontend/Backend Directories:** - **COMPLETED**
*   **Task 3.3: Move Core Components:** - **COMPLETED**
    *   Frontend components moved to `frontend/`.
    *   Backend components moved to `backend/`.
*   **Task 3.4: Update Root Files:** - **COMPLETED** (`.gitignore`, `README.md` updated, `docker-compose.yml` updated).

### Phase 2: Internal Frontend Refactoring
*   **Task 3.5: Consolidate Static Assets:** - **COMPLETED** (Original root `static/` contents moved to `backend/static/`, frontend uses `frontend/public/`).
*   **Task 3.6: Consolidate i18n Files:** - **COMPLETED** (`backend/translations/` for Flask, `frontend/locales/` for Next.js).
*   **Task 3.7: Organize `frontend/src/`:** - **COMPLETED** (`frontend/src/content/` created and populated).
*   **Task 3.8: Update Frontend Imports:** - **PENDING/ONGOING** (Paths for `content/` access were checked; other import path updates will be handled as development continues).
*   **Task 3.9: Refactor Frontend Code (Detailed):** - **FUTURE WORK** (Beyond structural refactoring).

### Phase 3: Internal Backend Refactoring
*   **Task 3.10: Organize `backend/`:** - **COMPLETED** (Flask structure established, Django remnants removed).
*   **Task 3.11: Review Backend Dependencies:** - **COMPLETED** (Flask `requirements.txt` prioritized).

### Phase 4: Testing and Verification
*   **Task 3.12: Run Tests:** - **PENDING/FUTURE WORK** (No automated tests were run as part of this refactoring).
*   **Task 3.13: Manual Testing:** - **PENDING** (This will be part of the next step in the overall plan).
*   **Task 3.14: Configure Linters and Formatters:** - **FUTURE WORK**.

### Phase 5: Documentation and Finalization
*   **Task 3.15: Update Documentation:** - **COMPLETED** (This `roadmap.md` and the main `README.md` have been updated).
*   **Task 3.16: Clean Up:** - **PENDING** (Final review for any stray files or empty directories after testing).

## 4. Workflow Suggestions (Retained for Reference)
*   Work Incrementally.
*   Focus on One Area at a Time.
*   Automated Checks.
*   Team Collaboration.
