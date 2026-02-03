import remarkReadingTime from "@/lib/remark-plugins/remark-reading-time.mjs"
import { remarkMdxFiles } from "fumadocs-core/mdx-plugins"
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config"
import lastModified from "fumadocs-mdx/plugins/last-modified"
import rehypeKatex from "rehype-katex"
import remarkMath from "remark-math"
import { z } from "zod"

export const phenomena = defineDocs({
  dir: "content/phenomena",
  docs: {
    schema: frontmatterSchema.extend({
      author: z.string(),
      pubDate: z.string().optional(),
      tags: z.array(z.string()).optional(),
      relatedWorks: z.string().optional(),
    }),
    files: ["**/*", "!**/data/*", "!**/*.json"],
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    files: ["!**/*.json"],
  },
})

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMath, remarkMdxFiles, remarkReadingTime],
    rehypePlugins: (v) => [rehypeKatex, ...v],
    valueToExport: ["readingTime"],
  },
  plugins: [lastModified()],
})
