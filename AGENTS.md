# NV Studio Design - Agent Instructions

## Project Overview

Static portfolio website built on the "Forty" HTML5 UP template for a residential architecture studio in the GTA.

Below is a **more specific, concrete version** of the same high-level document, explicitly framed around **NV Studio Design** and its current positioning.
It’s still **non-detailed**, but now very clear about *what exactly is being built and why*.

---

# NV Studio Design — Website High-Level Plan

**Residential Architecture & Interior Design | GTA / Ontario**

Website: [https://www.nvstudiodesign.com/](https://www.nvstudiodesign.com/)

---

## 1. Purpose of This Website

We are rebuilding / restructuring the **NV Studio Design** website to clearly present the studio as a **residential architecture and interior design practice** focused on the **Greater Toronto Area and Ontario**.

The website should:

* Clearly explain **what NV Studio Design does**
* Showcase **real residential projects** with context and narrative
* Position NV Studio Design as **competent in both design and permitting**
* Attract **homeowners and developers/builders**
* Convert visitors into **consultation requests**

This is **not** a branding experiment or a marketing-heavy site.
Clarity, structure, and real work matter more than visual effects.

---

## 2. Core Focus of NV Studio Design

### Primary services

* Residential architectural design
* Custom homes
* Residential renovations and additions

### Closely integrated services

* Interior design
* Zoning review & feasibility
* Building permits and permit drawings
* Coordination with consultants

Important:
These are **not separate businesses**.
They are presented as **one integrated residential design process**.

---

## 3. Geographic Scope

* **Primary:** Greater Toronto Area (GTA)
* **Secondary:** Ontario
* Projects are mostly in the GTA and should be referenced naturally (no artificial location pages).

---

## 4. Target Audience

The website is designed for:

* Homeowners (first-time and experienced)
* Developers / builders

Visitors should quickly understand:

* What NV Studio Design does
* Whether their project fits
* What working with the studio looks like

The site must balance:

* Visual inspiration
* Technical credibility
* Process clarity
* Practical guidance

---

## 5. What We Are Building (Site Structure)

### Proposed high-level structure

```
Home
Services
  ├─ Architectural Design (Residential)
  ├─ Interior Design
  └─ Planning & Building Permits
Process
Portfolio
  ├─ Projects Index
  └─ Individual Project Pages
About
Contact / Book Consultation
```

Navigation should remain **simple and minimal**.

---

## 6. Key Areas of Focus

### 1️⃣ Architectural Design page (Core page)

This is the **most important page** on the website.

It should:

* Represent NV Studio Design’s main service
* Explain residential architectural design in plain language
* Include zoning, feasibility, and permits as part of the service
* Be the primary SEO landing page
* Lead users toward consultation

Everything else supports this page.

---

### 2️⃣ Portfolio & Project Pages

Each project should have:

* Its own dedicated page
* A short written description
* City (not full address), year, goals, and challenges
* Plans, drawings, photos, or renders where available

The portfolio is:

* A core trust signal
* A long-term SEO asset
* Central to convincing visitors to make contact

This is **not just an image gallery**.

---

### 3️⃣ Clear, calm structure

The website should:

* Avoid clutter
* Avoid overly long text blocks
* Avoid creating too many micro-service pages
* Use structure and hierarchy to guide users

SEO is achieved through **clarity and structure**, not tricks.

---

## 7. SEO Approach (High Level)

SEO is treated as:

* Clear page intent
* Strong internal linking
* Consistent residential focus
* Real project content

Important:
Not all SEO-important pages need to be prominent in navigation.

---

## 8. Visual & Content Direction

* Strong emphasis on visuals
* Every page must still include meaningful text
* Project pages must combine visuals with explanation
* Tone: professional, confident, accessible

Avoid:

* Long philosophical statements
* Marketing buzzwords
* Visual noise

---

## 9. Primary Goal

The primary goal of the NV Studio Design website is:

> To encourage the right residential clients in the GTA and Ontario to book a consultation by clearly demonstrating design quality, technical competence, and real project experience.

---

## 10. What Success Looks Like

A successful website will:

* Immediately communicate NV Studio Design’s focus
* Present services clearly and honestly
* Showcase projects in a structured, informative way
* Make booking a consultation feel natural and easy

---

If you want, I can:

* Tighten this into a **1-page handoff document**
* Rewrite it in a **more technical tone for developers**
* Create a **visual sitemap** for implementation

This version should already give the implementer **very clear direction** on *what we are building and why*.


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

