import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from '@/components/ui/item'
import type pubs from '@/db/publications.json'
import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

type Publication = (typeof pubs)[number]

interface PublicationProps {
  pub: Publication
}

export function Publication({ pub }: PublicationProps) {
  const [rawMarkdown, setRawMarkdown] = React.useState('')

  useEffect(() => {
    async function fetchMarkdown() {
      // Only fetch if markdown field exists
      if (!pub.markdown) {
        return
      }

      try {
        const markdownURL = new URL(`../db/${pub.markdown}`, import.meta.url)
        const response = await fetch(markdownURL)
        let text = await response.text()

        // Strip frontmatter (content between --- delimiters)
        const frontmatterRegex = /^---\n[\s\S]*?\n---\n/
        text = text.replace(frontmatterRegex, '')

        console.log(text)

        setRawMarkdown(text)
      } catch (error) {
        console.error(`Error loading markdown file: ${pub.markdown}`, error)
      }
    }

    fetchMarkdown()
  }, [pub.markdown])

  // Format author names
  const authorString =
    pub.author
      ?.map((a: { family: string; given: string }) => `${a.given} ${a.family}`)
      .join(', ') || 'Unknown Author'

  // Get journal name from container-title
  const journal = pub['container-title'] || ''

  const type =
    pub.type === 'article-journal'
      ? 'journal'
      : pub.type === 'paper-conference'
        ? 'conference'
        : pub.type === 'chapter'
          ? 'chapter'
          : 'other'

  // Extract year from issued.date-parts
  const year = pub.issued?.['date-parts']?.[0]?.[0] || 'N/A'

  // Determine status based on container-title or other fields
  const status = pub['container-title'] === 'arXiv' ? 'preprint' : 'published'

  return (
    <AccordionItem value="item-1">
      <AccordionTrigger>
        <Item className="not-prose border-none p-0">
          <ItemContent>
            <ItemTitle className="text-lg font-normal">
              <p>
                <span className="text-lg font-bold">1. </span>
                {pub.title}
              </p>
            </ItemTitle>
            <ItemDescription className="text-foreground/80">
              {authorString}
            </ItemDescription>
            <ItemDescription className="italic">{journal}</ItemDescription>
            <ItemDescription className="mt-1 flex w-full flex-wrap items-center gap-2 text-xs">
              <Badge className="px-1 font-mono tabular-nums">{year}</Badge>
              <Badge variant="secondary" className="px-1 font-mono">
                {type}
              </Badge>
              <Badge
                variant="secondary"
                className={`${
                  status === 'published'
                    ? 'bg-lime-600 text-white dark:bg-lime-700'
                    : 'bg-orange-300 text-black'
                } px-1 font-mono`}
              >
                {status}
              </Badge>
              {/* {pub.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="font-mono px-1">
                    {tag}
                  </Badge>
                ))} */}
            </ItemDescription>
          </ItemContent>
        </Item>
      </AccordionTrigger>
      <AccordionContent>
        <p>{pub.abstract}</p>
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {rawMarkdown}
        </ReactMarkdown>
      </AccordionContent>
    </AccordionItem>
  )
}
