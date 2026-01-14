# Copilot Instructions for this Repository 🔧

## Quick summary
- Small static website using **HTML**, **Bootstrap (CDN)**, and **vanilla ES modules**.
- Entry point: `index.html` (loads `./js/main.js` as a module).
- Supporting scripts: `js/main.js` (module entry) and `js/utils.js` (utility module). Both are currently empty placeholders for behavior.
- No build system, package manager, test suite, or CI configuration detected.

## What an agent should know (actionable rules)
1. Entry points and structure
   - The site is served directly from `index.html`. The main script is loaded with:
     ` <script type="module" src="./js/main.js"></script>`
   - Prefer editing `js/main.js` for page-level wiring and `js/utils.js` for reusable functions.

2. Module conventions
   - Use native ES module syntax (named exports / default export). Example pattern:
     `import { helper } from './utils.js'`
   - Keep imports relative and within `./js/` (no bundler assumed).

3. Styling and markup
   - Uses **Bootstrap 5.3** from CDN (see `<link>` in `index.html`) — follow Bootstrap utility classes and markup conventions when adding components.
   - Images in the project are referenced via external URLs (no local assets folder present).

4. Running and debugging locally
   - There is no build step. Serve the folder with a simple static server (examples):
     - `python -m http.server 8000` (open `http://localhost:8000`)
     - or use VS Code Live Server extension.
   - Open Developer Tools (Console/Network) when debugging ES module import issues — module scripts commonly fail silently if blocked by file:// or CORS.

5. Tests and CI
   - No tests/CI found. Expect manual, browser-based verification for fixes.

6. Patterns to follow
   - Keep behavior unobtrusive and progressive (manipulate DOM only after `DOMContentLoaded`).
   - Prefer small, well-named exports from `js/utils.js` for reusability.
   - Stick to vanilla JS (this repo does not use frameworks or bundlers).

7. Typical tasks an agent may perform
   - Implement interactivity for hero buttons and card buttons in `js/main.js`.
   - Add utility helpers to `js/utils.js` (e.g., DOM helpers, fetch wrappers).
   - Add a basic lint or lightweight test only if explicitly requested, but do not assume a package manager.

## Examples (from this codebase)
- Entry script (in `index.html`):

  `<script type="module" src="./js/main.js"></script>`

- Bootstrap is provided via CDN:

  `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">`

## Limitations / What is NOT here
- No `package.json`, no build tools, no automated tests, and no CI configs.
- No server-side code or APIs in this repository.

---
If any sections are unclear or you want the instructions to include more hands-on examples or suggested PR templates for agents, tell me which areas to expand. ✅
