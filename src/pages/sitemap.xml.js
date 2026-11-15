import { SITE_URL } from "../site.js";

// Lists every page in src/pages so search engines can find them all.
const pages = Object.keys(import.meta.glob("./*.astro"))
  .map((file) => file.replace(/^\.\//, "").replace(/\.astro$/, ""))
  .filter((name) => name !== "404")
  .sort((a, b) => (a === "index" ? -1 : b === "index" ? 1 : a.localeCompare(b)));

export function GET() {
  const urls = pages
    .map((name) => {
      const loc = name === "index" ? `${SITE_URL}/` : `${SITE_URL}/${name}`;
      const priority = name === "index" ? "1.0" : name.startsWith("project-") ? "0.6" : "0.8";
      return `  <url>\n    <loc>${loc}</loc>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
}
