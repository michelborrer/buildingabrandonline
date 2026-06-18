import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.includes('/ai-brand-name-generator') &&
        !page.includes('/ai-slogan-generator'),
    }),
  ],
  site: 'https://buildingabrandonline.com',
  build: {
    format: 'directory',
  },
});
