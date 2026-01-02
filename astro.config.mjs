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

export default defineConfig({
  // Preserve existing ".html" URLs like "about.html"
  build: {
    format: "file"
  },
  trailingSlash: "ignore",
  base: process.env.GITHUB_ACTIONS === "true" ? getGithubPagesBase() : "/"
});

