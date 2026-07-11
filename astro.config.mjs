// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Your live URL. This is a *user* GitHub Pages repo (kitmitmit.github.io),
  // so the site is served from the root — no `base` path needed.
  site: "https://kitmitmit.github.io",
  integrations: [sitemap()],
});
