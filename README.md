# Forty by HTML5 UP

A responsive site template designed by HTML5 UP and released under the Creative Commons license.

## About

This is Forty, a sleek and modern HTML5 template featuring:
- Grid-based layout with smooth transitions
- Responsive design that works on all devices
- Clean, professional styling
- Interactive menu and smooth scrolling effects
- Contact form and social media integration

## Live Demo

Once deployed, your site will be available at: `https://[your-username].github.io/[repository-name]`

## Deployment to GitHub Pages

This repository is configured with GitHub Actions to automatically deploy to GitHub Pages whenever you push to the main branch.

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository's Settings
   - Navigate to the "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Push your changes**:
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

3. **Monitor deployment**:
   - Go to the "Actions" tab in your repository
   - Watch the "Deploy to GitHub Pages" workflow run
   - Once complete, your site will be live

### Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) will:
- Trigger on every push to the main branch
- Deploy the entire repository to GitHub Pages
- Provide the live URL in the workflow output

### Manual Deployment

You can also trigger deployment manually:
- Go to the "Actions" tab
- Select the "Deploy to GitHub Pages" workflow
- Click "Run workflow"

## Customization

### Editing Content
- `index.html` - Main homepage
- `landing.html` - Landing page template
- `generic.html` - Generic page template
- `elements.html` - UI elements showcase

### Styling
- CSS files are in `assets/css/`
- SCSS source files are in `assets/sass/`
- Modify `assets/sass/main.scss` and recompile if needed

### Images
- Replace images in the `images/` folder
- Update image references in HTML files

## Credits

**Template**: Forty by HTML5 UP (html5up.net)  
**Demo Images**: Unsplash (unsplash.com)  
**Icons**: Font Awesome (fontawesome.io)  
**Other**: jQuery, Scrollex, Responsive Tools  

## License

Free for personal and commercial use under the CCA 3.0 license (html5up.net/license) 