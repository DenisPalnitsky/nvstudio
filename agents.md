# NV Studio Design - Agent Instructions

## Project Overview

Static portfolio website built on the "Forty" HTML5 UP template for a residential architecture studio in the GTA.

## Current State

The site structure has been implemented based on `docs/pages.md`. Each page contains placeholder content (TODO boxes) that needs to be replaced with real content.

### Navigation Structure
Visible in header on all pages (no hamburger menu):
```
Home | Services | Process | Portfolio | About | Contact
```

### Pages with TODO Placeholders
These pages have structure but need real content:
- `index.html` - TODO for Home section
- `services.html` - TODO for Services section
- `architectural-design.html` - TODO for Architectural Design section
- `interior-design.html` - TODO for Interior Design section
- `building-permits.html` - TODO for Planning & Building Permits section
- `process.html` - TODO for Process section
- `portfolio.html` - TODO for Portfolio section
- `about.html` - TODO for About section
- `contact.html` - TODO for Contact section

### Project Pages (have content)
- `project-modern-residential-villa.html`
- `project-contemporary-kitchen-design.html`
- `project-luxury-home-renovation.html`
- `project-laneway-house.html`

## Technical Stack

### Core Technologies
- **HTML5** - Semantic markup with modern elements (`<section>`, `<article>`, `<header>`, `<nav>`)
- **CSS3/SCSS** - Compiled from SASS source files
- **JavaScript** - jQuery-based interactions and effects

### CSS Architecture
```
assets/
├── css/
│   ├── main.css              # Compiled stylesheet
│   ├── main.css.map          # Source map for debugging
│   ├── noscript.css          # Fallback for no-JS browsers
│   └── fontawesome-all.min.css
└── sass/
    ├── main.scss             # Main entry point
    ├── noscript.scss
    ├── base/                 # Typography, reset styles
    ├── components/           # Reusable UI components
    ├── layout/               # Page structure, grid
    └── libs/
        ├── _vars.scss        # Variables (colors, fonts, breakpoints)
        ├── _mixins.scss      # SASS mixins
        ├── _functions.scss   # SASS functions
        ├── _breakpoints.scss # Responsive breakpoints
        ├── _html-grid.scss   # Grid system
        └── _vendor.scss      # Vendor prefixes
```

### JavaScript Libraries
- **jQuery** (`jquery.min.js`) - DOM manipulation and events
- **Scrollex** (`jquery.scrollex.min.js`) - Scroll-based interactions
- **Scrolly** (`jquery.scrolly.min.js`) - Smooth scrolling
- **Breakpoints** (`breakpoints.min.js`) - Responsive breakpoint detection
- **Browser** (`browser.min.js`) - Browser detection utilities
- **Util** (`util.js`) - Helper utilities
- **Main** (`main.js`) - Site-specific functionality

### Icons & Fonts
- **Font Awesome** - Icon library via CSS
- **Web fonts** - Located in `assets/webfonts/`

### Deployment
- **GitHub Pages** - Static hosting
- **GitHub Actions** - CI/CD pipeline (`.github/workflows/deploy-pages.yml`)
- Auto-deploys on push to `main` branch

## File Structure

```
/
├── index.html                     # Homepage
├── services.html                  # Services overview
├── process.html                   # Process page
├── portfolio.html                 # Portfolio index
├── about.html                     # About page
├── contact.html                   # Contact / Book consultation
├── architectural-design.html      # Architectural Design service
├── interior-design.html           # Interior Design service
├── building-permits.html          # Planning & Building Permits service
├── project-*.html                 # Individual project pages
├── docs/                          # Documentation
│   ├── pages.md                   # Content requirements per page
│   ├── structure.md               # Site structure reference
│   ├── Redesign.md                # SEO & redesign principles
│   └── architecture-design.md     # Architectural Design page details
├── images/                        # All imagery
├── assets/
│   ├── css/                       # Compiled CSS
│   ├── sass/                      # SCSS source
│   ├── js/                        # JavaScript
│   └── webfonts/                  # Font files
├── .github/workflows/             # CI/CD config
└── LICENSE.txt                    # CCA 3.0 license
```

## Development Guidelines

### Content Updates
Each page has a TODO placeholder box (white background, dashed border) containing:
- Purpose of the page
- Content recommendations
- Implementation notes

To replace placeholder content:
1. Refer to `docs/pages.md` for detailed requirements
2. Replace the TODO div with actual content
3. Follow SEO guidelines from `docs/Redesign.md`

### Styling Changes
1. Edit SCSS files in `assets/sass/`, not compiled CSS
2. Variables in `assets/sass/libs/_vars.scss`
3. Recompile SASS after changes

### Adding Pages
1. Copy structure from existing page (e.g., `about.html`)
2. Include same header navigation on all pages
3. Add placeholder TODO box if content is pending

### Images
- Optimize before adding
- Use descriptive filenames
- Include alt text for accessibility

### Performance
- Keep JavaScript minimal
- Optimize and compress images
- Use relative paths for GitHub Pages compatibility
- No fade-in/out animations (removed `is-preload` class for instant loading)

## License

Template: CCA 3.0 (html5up.net/license)

