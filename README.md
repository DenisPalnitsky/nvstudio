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

## Deployment

The site automatically deploys to GitHub Pages via GitHub Actions on pushes to `main`. The base path is configured automatically based on the repository name.