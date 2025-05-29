# Project Refactoring Roadmap

This document outlines a plan to reorganize and clean up the project repository. Based on the current structure, it appears there are several distinct parts within this single repository, leading to confusion and difficulty in navigation. This roadmap incorporates an analysis of the existing structure and proposes steps to organize the core components and handle the other parts.

## 1. Project Scope: Analysis and Decisions

An analysis of the repository structure reveals several distinct top-level directories. To proceed with refactoring, we must first define the scope of the primary project and how to handle the others.

**Analysis:**

*   The directories `pages/`, `src/`, `public/`, `backend/`, `content/`, `locales/`, `translations/`, along with root files like `app.py`, `package.json`, `package-lock.json`, `requirements.txt`, appear to constitute the **primary web application** under active development. This structure suggests a Python backend combined with a frontend framework (likely Next.js).
*   `artemis-ai-site/` looks like a separate, possibly older, static website.
*   `Artemis-bootstrap/` appears to be source material or a build process for a theme/template.
*   `Artemis_Web_Portfolio/` contains multiple sub-directories, each looking like a distinct project or template (e.g., Next.js apps under `templates.artemis-ai.ca`). This is a collection of separate items.
*   `static/` is likely a redundant static asset directory given the presence of `public/`.

**Decisions:**

*   The **Main Project** for refactoring is defined as the core application components: `pages/`, `src/`, `public/`, `backend/`, `content/`, `locales/`, `translations/`, `app.py`, `package.json`, `package-lock.json`, `requirements.txt`, `docs/`, `ops/`. (These will be moved into a clearer `frontend/` and `backend/` structure).
*   `artemis-ai-site/` will be treated as a **Separate Project**. Action: Consider moving to its own repository or a dedicated `archive/` or `separate-projects/` directory.
*   `Artemis-bootstrap/` will be treated as **Source Material/Template**. Action: Move to a `resources/` or `templates/source/` directory, or remove if no longer needed.
*   `Artemis_Web_Portfolio/` will be treated as a **Collection of Projects**. Action: Move this directory to a `portfolio/` or `examples/` directory at the root. Consider splitting into separate repositories in the future.
*   `static/` is **Redundant**. Action: Consolidate any unique assets into `frontend/public/` and remove the `static/` directory.

## 2. Proposed Structure for the Main Project

Based on the identified core components, here is a suggested logical structure focusing on clarity and separation of concerns. This structure aligns with common practices for web applications using separate frontend and backend architectures.

```
/
├── backend/              # All backend code (Python application, API)
│   ├── src/              # Backend source code
│   ├── requirements/     # Dependency files
│   └── ...
├── content/              # Markdown or other content files (for blog, courses)
│   ├── blog/
│   ├── courses/
│   └── services/
├── frontend/             # All frontend application code (Next.js app)
│   ├── public/           # Static assets served directly (consolidated from public/ and static/)
│   ├── src/              # Frontend source code
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Pages/routes
│   │   ├── utils/        # Frontend utilities
│   │   ├── styles/       # Frontend styles
│   │   └── ...
│   ├── locales/          # Frontend localization files (e.g., JSON) - consolidate here
│   ├── translations/     # Frontend translation files - consolidate here
│   ├── package.json      # Frontend dependencies and scripts
│   ├── package-lock.json # Frontend package lock file
│   └── ...
├── docs/                 # Project documentation
├── ops/                  # Operational files (e.g., Nginx config)
├── portfolio/ or examples/ # Moved Artemis_Web_Portfolio (Optional)
├── archive/ or separate-projects/ # Moved artemis-ai-site (Optional)
├── resources/ or templates/source/ # Moved Artemis-bootstrap (Optional)
├── .gitignore            # Main .gitignore
├── README.md             # Main project README
└── roadmap.md            # This document
```

**Rationale:**
*   Clearly separates `backend` and `frontend`.
*   Keeps `content` separate.
*   Consolidates frontend-related configuration and source within a `frontend/` directory.
*   Consolidates i18n files (`locales` and `translations`) into the relevant section (`frontend/`).
*   Handles the other identified directories by moving them to clearly named locations or recommending external handling.
*   Consolidates static assets.

## 3. Actionable Refactoring Tasks

These tasks follow from the analysis and decisions in Section 1.

### Phase 1: Isolation and Initial Structure

*   **Task 3.1: Handle Non-Core Directories:**
    *   Execute the strategy decided in Section 1 for `artemis-ai-site/`, `Artemis-bootstrap/`, and `Artemis_Web_Portfolio/` (e.g., move to `archive/`, `resources/`, `portfolio/`).
*   **Task 3.2: Create Base Frontend/Backend Directories:**
    *   Create `frontend/` and `backend/` directories at the root.
*   **Task 3.3: Move Core Components:**
    *   Move the identified core frontend directories (`pages/`, `src/`, `public/`, `locales/`, `translations/`) and files (`package.json`, `package-lock.json`) into `frontend/`.
    *   Move the identified core backend content (`backend/` directory content, `app.py`, `requirements.txt`, `gunicorn.conf.py`) into the new `backend/` directory. (Existing `backend/` might be renamed/merged).
*   **Task 3.4: Update Root Files:**
    *   Review and update root-level files (`.gitignore`, `README.md`) to reflect the new `frontend/` and `backend/` structure. The main `README.md` should provide an overview.

### Phase 2: Internal Frontend Refactoring

*   **Task 3.5: Consolidate Static Assets:**
    *   Review the original `static/` directory. Move any unique assets from `static/` into the appropriate subdirectories within `frontend/public/`.
    *   Remove the original `static/` directory.
*   **Task 3.6: Consolidate i18n Files:**
    *   Review the original `locales/` and `translations/` directories now within `frontend/`. Consolidate them into a single, consistently named directory (e.g., `frontend/locales/` or `frontend/i18n/`). Update all code imports accordingly.
*   **Task 3.7: Organize `frontend/src/`:**
    *   Ensure the structure within `frontend/src/` follows a consistent pattern (components, pages, utils, styles, hooks, context, etc.).
    *   Move files into the appropriate subdirectories if they are currently at a higher level or in misnamed folders.
*   **Task 3.8: Update Frontend Imports:**
    *   Update all import paths within the `frontend/` directory to reflect the new locations of files and directories. Automated tools or IDE features are highly recommended.
*   **Task 3.9: Refactor Frontend Code (Detailed):**
    *   Break down large components or utility files.
    *   Standardize naming conventions.
    *   Ensure separation of concerns within files.

### Phase 3: Internal Backend Refactoring

*   **Task 3.10: Organize `backend/`:**
    *   Review and organize the code within the new `backend/` directory (e.g., by modules, services, or layers).
*   **Task 3.11: Review Backend Dependencies:**
    *   Ensure `backend/requirements.txt` or equivalent is clean and only includes necessary dependencies.

### Phase 4: Testing and Verification

*   **Task 3.12: Run Tests:**
    *   Execute the test suites for both frontend and backend. Fix any tests broken by the refactoring.
*   **Task 3.13: Manual Testing:**
    *   Thoroughly test the application manually to ensure all features work as expected in the new structure.
*   **Task 3.14: Configure Linters and Formatters:**
    *   Update configuration for tools like ESLint, Prettier, Flake8, or Black to match the chosen code style and potentially enforce aspects of the new structure.

### Phase 5: Documentation and Finalization

*   **Task 3.15: Update Documentation:**
    *   Update the main `README.md` with the new project structure, setup instructions for both frontend and backend, and how to run the application.
    *   Update or create documentation within the `docs/` directory.
*   **Task 3.16: Clean Up:**
    *   Remove any temporary files or empty directories created during the refactoring process.

## 4. Workflow Suggestions

*   **Work Incrementally:** Tackle these tasks in small, atomic commits and pull requests.
*   **Focus on One Area at a Time:** Don't try to reorganize everything simultaneously.
*   **Automated Checks:** Utilize linters, formatters, and tests to maintain code quality and catch errors early.
*   **Team Collaboration:** Discuss the proposed structure and tasks as a team. Pair programming on tricky parts can be helpful.

This roadmap provides a structured approach to tackling the current organizational challenges, starting with clarifying the project scope and then proceeding with the reorganization of the identified core components and handling of other distinct parts.

