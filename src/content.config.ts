import { glob } from 'astro/loaders'
import { defineCollection, reference, z } from 'astro:content'

const phenomena = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/phenomena', pattern: '*/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      tags: z.array(z.string()).optional(),
      author: z.string().default('Anonymous'),
      relatedWorks: reference('references').default('').optional(),
    }),
})

const references = defineCollection({
  loader: glob({ base: './src/phenomena', pattern: '*/*.json' }),
  schema: z.array(
    z.object({
      type: z.enum(['journal', 'conference']).default('journal'),
      title: z.string(),
      authors: z.array(z.object({ family: z.string(), given: z.string() })),
      journal: z.string(),
      year: z.number(),
      description: z.string().optional(),
      tags: z.array(z.string()).optional(),
      arxiv: z.string().optional(),
      doi: z.string().optional(),
      supplementary: z.string().optional(),
      url: z.string().optional(),
      pdfLink: z.string().optional(),
    })
  ),
})

export const collections = { phenomena, references }
