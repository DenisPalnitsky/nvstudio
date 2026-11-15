// Public address of the site, used for canonical links, social previews and the sitemap.
// When the site moves to its own domain, change this to "https://www.nvstudiodesign.com"
// and update public/robots.txt to match.
export const SITE_URL = "https://denispalnitsky.github.io/nvstudio";

export const BUSINESS = {
  name: "NV Studio Design",
  email: "info@nvstudiodesign.com",
  telephone: "+1-647-771-3590",
  city: "Toronto",
  region: "ON",
  country: "CA",
  sameAs: [
    "https://www.instagram.com/nvstudiodesign/",
    "https://www.facebook.com/nvstudiodesign"
  ]
};

// Turns the current page path into its public, extension-free address.
export function pageUrl(pathname) {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "");
  let p = pathname || "/";
  if (base && p.startsWith(base)) p = p.slice(base.length);
  p = p.replace(/\.html$/, "").replace(/(^|\/)index$/, "").replace(/^\/+|\/+$/g, "");
  return p ? `${SITE_URL}/${p}` : `${SITE_URL}/`;
}
