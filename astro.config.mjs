import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs'
import { remarkModifiedTime } from './src/plugins/remarkModifiedTime.mjs'

// https://astro.build/config
export default defineConfig({
  site: 'https://dlphenomena.netlify.app',
  integrations: [sitemap(), react(), mdx()],
  markdown: { remarkPlugins: [remarkReadingTime, remarkModifiedTime] },

  vite: {
    plugins: [tailwindcss()],
  },
})
