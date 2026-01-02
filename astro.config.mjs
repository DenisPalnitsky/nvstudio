import { defineConfig } from "astro/config";

function getGithubPagesBase() {
  const repo = process.env.GITHUB_REPOSITORY; // "owner/name"
  const owner = process.env.GITHUB_REPOSITORY_OWNER;
  if (!repo || !owner) return "/";

  const name = repo.split("/")[1];

  // User/Org Pages repo (e.g. "owner.github.io") is served from the domain root.
  if (name === `${owner}.github.io`) return "/";

  // Project Pages repo is served from "/repo".
  return `/${name}`;
}

function getGithubPagesSite() {
  const owner = process.env.GITHUB_REPOSITORY_OWNER;
  if (!owner) return undefined;

  // For GitHub Pages, site is always https://<username>.github.io
  return `https://${owner}.github.io/nvstudio`;
}

export default defineConfig({
  // Preserve existing ".html" URLs like "about.html"
  build: {
    format: "file"
  },
  trailingSlash: "ignore",
  site: process.env.GITHUB_ACTIONS === "true" ? getGithubPagesSite() : undefined,
  base: process.env.GITHUB_ACTIONS === "true" ? getGithubPagesBase() : "/"
});

