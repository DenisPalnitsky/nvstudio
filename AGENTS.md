# NV Studio Design - Agent Instructions

## Project Overview

Static portfolio website built with **Astro** on the "Forty" HTML5 UP template for a residential architecture studio in the GTA.

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
- `src/pages/index.astro` - TODO for Home section
- `src/pages/services.astro` - TODO for Services section
- `src/pages/architectural-design.astro` - TODO for Architectural Design section
- `src/pages/interior-design.astro` - TODO for Interior Design section
- `src/pages/building-permits.astro` - TODO for Planning & Building Permits section
- `src/pages/process.astro` - TODO for Process section
- `src/pages/portfolio.astro` - TODO for Portfolio section
- `src/pages/about.astro` - TODO for About section
- `src/pages/contact.astro` - TODO for Contact section

### Project Pages (have content)
- `src/pages/project-modern-residential-villa.astro`
- `src/pages/project-contemporary-kitchen-design.astro`
- `src/pages/project-luxury-home-renovation.astro`
- `src/pages/project-laneway-house.astro`

## Technical Stack

### Core Technologies
- **Astro 5.0** - Static site generator with component-based architecture
- **HTML5** - Semantic markup with modern elements (`<section>`, `<article>`, `<header>`, `<nav>`)
- **CSS3/SCSS** - Compiled from SASS source files (located in `public/assets/sass/`)
- **JavaScript** - jQuery-based interactions and effects

### Project Structure
```
src/
├── pages/                    # Astro pages (routes)
│   ├── index.astro          # Homepage
│   ├── services.astro
│   ├── architectural-design.astro
│   ├── interior-design.astro
│   ├── building-permits.astro
│   ├── process.astro
│   ├── portfolio.astro
│   ├── about.astro
│   ├── contact.astro
│   └── project-*.astro      # Individual project pages
├── components/              # Reusable Astro components
│   ├── SiteHeader.astro
│   ├── SiteMenu.astro
│   ├── SiteFooter.astro
│   ├── ContactCta.astro
│   └── Scripts.astro
└── layouts/                 # Page layouts
    └── BaseLayout.astro     # Main layout wrapper

public/
├── assets/
│   ├── css/                 # Compiled stylesheets
│   │   ├── main.css
│   │   ├── main.css.map
│   │   ├── noscript.css
│   │   └── fontawesome-all.min.css
│   ├── sass/                # SCSS source files
│   │   ├── main.scss
│   │   ├── noscript.scss
│   │   ├── base/            # Typography, reset styles
│   │   ├── components/      # Reusable UI components
│   │   ├── layout/          # Page structure, grid
│   │   └── libs/
│   │       ├── _vars.scss
│   │       ├── _mixins.scss
│   │       ├── _functions.scss
│   │       ├── _breakpoints.scss
│   │       ├── _html-grid.scss
│   │       └── _vendor.scss
│   ├── js/                  # JavaScript libraries
│   │   ├── jquery.min.js
│   │   ├── jquery.scrollex.min.js
│   │   ├── jquery.scrolly.min.js
│   │   ├── breakpoints.min.js
│   │   ├── browser.min.js
│   │   ├── util.js
│   │   └── main.js
│   └── webfonts/            # Font files
└── images/                  # All imagery
```

### JavaScript Libraries
- **jQuery** - DOM manipulation and events
- **Scrollex** - Scroll-based interactions
- **Scrolly** - Smooth scrolling
- **Breakpoints** - Responsive breakpoint detection
- **Browser** - Browser detection utilities
- **Util** - Helper utilities
- **Main** - Site-specific functionality

### Icons & Fonts
- **Font Awesome** - Icon library via CSS
- **Web fonts** - Located in `public/assets/webfonts/`

### Deployment
- **GitHub Pages** - Static hosting
- **GitHub Actions** - CI/CD pipeline using `withastro/action@v5`
- Auto-deploys on push to `main` branch
- Builds static HTML files (`.html` format preserved for compatibility)

## File Structure

```
/
├── src/                           # Astro source files
│   ├── pages/                     # Page routes (generate .html files)
│   ├── components/                # Reusable components
│   └── layouts/                   # Page layouts
├── public/                        # Static assets (copied as-is)
│   ├── assets/                    # CSS, JS, fonts
│   │   ├── css/                   # Compiled CSS
│   │   ├── sass/                  # SCSS source
│   │   ├── js/                    # JavaScript
│   │   └── webfonts/              # Font files
│   └── images/                      # Images
├── docs/                          # Documentation
│   ├── pages.md                   # Content requirements per page
│   ├── structure.md               # Site structure reference
│   ├── Redesign.md                # SEO & redesign principles
│   └── architecture-design.md     # Architectural Design page details
├── .github/workflows/             # CI/CD config
├── astro.config.mjs               # Astro configuration
├── package.json                   # Dependencies
└── LICENSE.txt                    # CCA 3.0 license
```

## Development Guidelines

### Development Workflow
- **Local development**: `npm run dev` (starts Astro dev server)
- **Build**: `npm run build` (generates static HTML files in `dist/`)
- **Preview**: `npm run preview` (preview production build locally)

### Content Updates
Each page has a TODO placeholder box (white background, dashed border) containing:
- Purpose of the page
- Content recommendations
- Implementation notes

To replace placeholder content:
1. Refer to `docs/pages.md` for detailed requirements
2. Edit the `.astro` file in `src/pages/`
3. Replace the TODO div with actual content
4. Follow SEO guidelines from `docs/Redesign.md`

### Styling Changes
1. Edit SCSS files in `public/assets/sass/`, not compiled CSS
2. Variables in `public/assets/sass/libs/_vars.scss`
3. Recompile SASS manually after changes (SCSS compilation is not automated in Astro build)
4. Use `sass public/assets/sass/main.scss public/assets/css/main.css --style=expanded --source-map`

### Adding Pages
1. Create new `.astro` file in `src/pages/` (filename becomes route)
2. Use `BaseLayout` component for consistent structure
3. Import and use shared components (`SiteHeader`, `SiteFooter`, etc.)
4. Add placeholder TODO box if content is pending

### Components
- Reusable components in `src/components/`
- Use Astro component syntax with frontmatter for props
- Components are automatically available to pages

### Images
- Place images in `public/images/`
- Reference with `/images/filename.jpg` (Astro handles public folder)
- Optimize before adding
- Use descriptive filenames
- Include alt text for accessibility

### Performance
- Astro automatically optimizes and bundles assets
- Keep JavaScript minimal
- Optimize and compress images
- No fade-in/out animations (removed `is-preload` class for instant loading)

## Design System & Technical Decisions

### Modern Minimal Redesign (January 2025)

The site was redesigned from a dark theme to a modern minimal light aesthetic inspired by architectural studios like SMPL and Plot Non Plot.

#### Color Palette

**Light Theme:**
- Background: `#ffffff` (pure white)
- Background Alt: `#fafafa` (off-white for sections)
- Text: `#2a2a2a` (warm charcoal)
- Text Bold: `#1a1a1a` (near-black for emphasis)
- Text Light: `#7a7a7a` (medium gray for secondary text)
- Borders: `#e5e5e5` (light gray)
- Border Background: `#f5f5f5` (very light gray)
- Highlight: `#2a2a2a` (dark for interactions)
- Accents: Muted slate/gray tones (#4a5568, #5a6c7d, #6b7280, #556b7c, #4e5d6c, #5c6b79)

**Rationale:** Gallery-like aesthetic that lets architectural photography stand out. Warm charcoal text instead of pure black for softer reading experience.

#### Typography

**Font Family:**
- Primary: IBM Plex Sans (400, 500, 600 weights)
- Monospace: IBM Plex Mono
- Fallbacks: -apple-system, BlinkMacSystemFont, Segoe UI

**Font Import:**
```scss
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400&display=swap');
```

**Rationale:**
- Avoids generic fonts (Inter, Arial) per frontend aesthetics guidelines
- Professional, distinctive, excellent UI clarity
- Good web rendering across platforms

**Typography Scale:**
- Body: 17pt (responsive: 14pt→12pt→11pt)
- H1: 2.75em (increased from 2.5em for modern minimal impact)
- H2: 1.875em (increased from 1.75em)
- H3: 1.5em (increased from 1.35em)
- Letter spacing: -0.01em (tighter, modern feel)
- Letter spacing alt: 0.08em (for uppercase, less extreme than 0.25em)

#### Spacing & Sizing

- Border radius: 2px (sharp minimal, reduced from 4px)
- Element margin: 3em (more breathing room, increased from 2em)
- Inner width: 68em (wider content, increased from 65em)

#### Component Design Decisions

**Buttons:**
- Default: Outlined with 2px solid border, transparent background
- Primary: Solid dark background with white text
- Border radius: 0 (fully square for minimal aesthetic)
- Font weight: 500 (medium instead of bold)
- Letter spacing: 0.08em (tighter)
- Hover: Fill background on default, lighten on primary

**Forms:**
- Background: White with 1px solid border (#e5e5e5)
- Focus: Border changes to dark (#1a1a1a), no box-shadow
- Labels: Medium gray (#7a7a7a), medium weight (500)
- Clean, minimal aesthetic without glows or shadows

**Tiles/Image Overlays:**
- Uniform dark overlay: `rgba(26, 26, 26, 0.4)` on all tiles
- Hover: Reduce opacity to 0.2 to reveal more image
- Removed: 6 rotating colored accent overlays (simplified for consistency)

**Project Cards:**
- Added: Subtle 1px border (#e5e5e5)
- Hover: Scale reduced to 1.03 (from 1.05) for subtler interaction
- Links: Dark color with underline on hover

**Header:**
- Background: White with subtle shadow `0 1px 3px 0 rgba(0,0,0,0.08)`
- Logo strong: Dark background (#1a1a1a) with white text
- Navigation: Dark text, becomes bold on hover
- Alt header (homepage): Transparent with white text over banner
- Mobile: Hamburger menu shown on small screens, nav links hidden

**Banner:**
- Overlay: Uniform `rgba(26, 26, 26, 0.35)` dark overlay
- Removed: 6 style variants with colored overlays (style1-6)
- Text: White for contrast against dark overlay

#### Contact Section Simplification

**Before:** Complex 60/40 split layout (94 lines of SCSS)
**After:** Simple single-column centered layout (21 lines of SCSS)

**Changes:**
- Removed: Left/right column split with flex layout
- Removed: Border between columns
- Removed: Complex responsive breakpoint overrides
- Added: Simple centered content (max-width: 50em)
- Result: 77% code reduction, cleaner visual hierarchy

**Contact Form Strategy:**
- **Full form**: Only on `src/pages/contact.astro` (dedicated contact page)
- **CTA sections**: Simple "Book a Consultation" button via `ContactCta` component on all other pages
- **Rationale**: Follows design principles - "Link from every page" not "embed form everywhere"
  - Reduces clutter
  - Cleaner pages
  - Single source of truth for form
  - Better UX with clear call-to-action

#### Section-Specific Styling

**Contact Section (#contact):**
- Background: `#fafafa` (off-white for subtle differentiation)
- Padding: 4em vertical (3em on small screens)
- Layout: Block (single column), full-width

**Box Component:**
- Border: 1px solid (#e5e5e5)
- Background: Very light gray (#f5f5f5)
- Padding: 2em (increased from 1.5em)

**Section Headers (header.major):**
- Underline: 1px (reduced from 2px for subtlety)
- Margin: Increased spacing between heading and underline

### SASS Compilation

**Note:** SCSS compilation is not automated in the Astro build process. CSS files must be compiled manually.

**SASS Compiler:** Dart Sass
- Source: `public/assets/sass/`
- Command: `sass public/assets/sass/main.scss public/assets/css/main.css --style=expanded --source-map`
- Also compile: `sass public/assets/sass/noscript.scss public/assets/css/noscript.css`

**Output:**
- `public/assets/css/main.css` (~67KB)
- `public/assets/css/main.css.map` (source map)
- `public/assets/css/noscript.css`

**Astro Build:**
- Astro builds static HTML files from `src/pages/*.astro`
- Copies `public/` folder contents to `dist/` as-is
- Generated files maintain `.html` extension for URL compatibility

### Design Philosophy

**Modern Minimal Principles Applied:**
- Clean whitespace and breathing room
- Minimal color palette (avoid bright accent colors)
- Typography-driven hierarchy
- Uniform design elements (no rotating colors)
- Subtle interactions (no aggressive animations)
- Content-first (imagery and text are focal points)
- Professional yet approachable
- Gallery-like presentation for architectural work

**Avoided:**
- Generic AI aesthetics (Inter, Roboto, Arial fonts)
- Bright colored overlays and gradients
- Busy layouts with split columns
- Over-engineered components
- Repetitive forms on every page

## License

Template: CCA 3.0 (html5up.net/license)

