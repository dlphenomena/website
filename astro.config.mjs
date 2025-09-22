import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

import netlify from '@astrojs/netlify'

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://zheng-homepage.netlify.app',
  integrations: [sitemap(), react(), mdx()],
  markdown: {},

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
})