// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// GitHub Pages (project site):
// 1. Set `site` to https://<GITHUB_USERNAME>.github.io
// 2. Set `base` to /<REPO_NAME>/  (leading and trailing slashes required)
// 3. If this repo is published at a custom domain or at
//    https://<GITHUB_USERNAME>.github.io (user/organization site),
//    remove the `base` option entirely.
const site = 'https://fahriza253.github.io';
const base = '/project-recap/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
