# NV Studio Design - Agent Instructions

## Project Overview

Static portfolio website built on the "Forty" HTML5 UP template. The site structure and content are subject to change.

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
├── index.html                # Homepage
├── *.html                    # Content pages
├── images/                   # All imagery
├── assets/
│   ├── css/                  # Compiled CSS
│   ├── sass/                 # SCSS source
│   ├── js/                   # JavaScript
│   └── webfonts/             # Font files
├── .github/workflows/        # CI/CD config
└── LICENSE.txt               # CCA 3.0 license
```

## Development Guidelines

### Styling Changes
1. Edit SCSS files in `assets/sass/`, not compiled CSS
2. Variables in `assets/sass/libs/_vars.scss`
3. Recompile SASS after changes

### Adding Pages
1. Duplicate appropriate template (`landing.html`, `generic.html`)
2. Update navigation in all HTML files

### Images
- Optimize before adding
- Use descriptive filenames
- Include alt text for accessibility

### Performance
- Keep JavaScript minimal
- Optimize and compress images
- Use relative paths for GitHub Pages compatibility

## License

Template: CCA 3.0 (html5up.net/license)

