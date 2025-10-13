import { remarkReadingTime } from '@/lib/remark-reading-time'
import { remarkModifiedTime } from '@/lib/remarkModifiedTime'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

// https://astro.build/config
export default defineConfig({
  site: 'https://dlphenomena.netlify.app',
  integrations: [sitemap(), react(), mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkModifiedTime, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
