// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://polar-reach.store',
    integrations: [sitemap(), tailwind()],
});