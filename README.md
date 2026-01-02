# NV Studio Design (Astro)

Static portfolio website for NV Studio Design, built with [Astro](https://astro.build/) and deployed to GitHub Pages.

## Local development

Requirements:
- Node.js 20+ (CI uses Node 20)

Install dependencies:

```bash
npm install
```

Run locally (dev server):

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project structure (high level)

- **Pages**: `src/pages/*.astro` (these render to `dist/*.html`)
- **Reusable layout/components**: `src/layouts/`, `src/components/`
- **Static assets** (served as-is): `public/assets/`, `public/images/`

This project is configured to **preserve existing `.html` URLs** (e.g. `about.html`, `services.html`) so current links keep working.

## Deployment to GitHub Pages

Deployment is handled by GitHub Actions in `.github/workflows/deploy-pages.yml`:
- Runs on pushes to `main` (and can be triggered manually)
- Installs deps with `npm ci`
- Builds the site with `npm run build`
- Uploads the build output from `dist/` to GitHub Pages

### Base path on GitHub Pages

Astro’s `base` is set automatically during GitHub Actions builds:
- If the repo is `username.github.io`, the site is served at `/`
- Otherwise (project pages), the site is served at `/<repo-name>/`

## Credits

**Template**: Forty by HTML5 UP (html5up.net)  
**Demo Images**: Unsplash (unsplash.com)  
**Icons**: Font Awesome (fontawesome.io)  
**Other**: jQuery, Scrollex, Responsive Tools  

## License

Free for personal and commercial use under the CCA 3.0 license (html5up.net/license) 