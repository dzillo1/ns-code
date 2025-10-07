Deployment notes
================

This project is built with Vite. Important deployment flow:

1. Keep `index.html` in the project root referencing the dev entry `/src/main.js`.
2. Run `npm run build` in `VUE-comp/order-options-simplified` — this generates `dist/`.
3. Publish the contents of `dist/` (not the source `index.html`) to GitHub Pages.

The repository contains a GitHub Actions workflow `.github/workflows/deploy-order-options-simplified.yml` which will:
- install dependencies
- run `npm run build` in `VUE-comp/order-options-simplified`
- publish `VUE-comp/order-options-simplified/dist` to the `gh-pages` branch

Why this matters
-----------------
If you overwrite the source `index.html` with the built `dist/index.html` before running the build, Vite will attempt to resolve the already-built asset paths (e.g. `/ns-code/VUE-comp/order-options-simplified/assets/main-...js`) and fail. Keep the source `index.html` unchanged; the workflow handles building and publishing the built output.
