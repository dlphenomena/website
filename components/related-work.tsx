import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import type { Reference } from "@/lib/db/reference"
import { getMDXComponents } from "@/mdx-components"

export async function RelatedWork({
  index,
  baseDir,
  work,
}: {
  index: number
  baseDir: string | URL
  work: Reference
}) {
  // Format author names
  const authorString =
    work.authors
      ?.map((a: { family: string; given: string }) => `${a.given} ${a.family}`)
      .join(", ") || "Unknown Author"

  const type =
    work.type === "journal"
      ? "journal"
      : work.type === "conference"
        ? "conference"
        : "other"

  const workURL = work.url
    ? work.url
    : work.doi
      ? `https://doi.org/${work.doi}`
      : work.arxiv
        ? `https://arxiv.org/abs/${work.arxiv}`
        : ""

  const pdfLink = work.pdfLink
    ? work.pdfLink
    : work.arxiv
      ? `https://arxiv.org/pdf/${work.arxiv}.pdf`
      : ""

  // Load supplementary content
  const { default: MDX } = work.supplementary
    ? await import(`@/content/phenomena/${baseDir}/data/${work.supplementary}`)
    : { default: null }

  return (
    <AccordionItem value={`item-${index}`}>
      <AccordionTrigger>
        <Item className="not-prose border-none p-0">
          <ItemMedia variant="icon" className="bg-orange-100">
            <span className="font-italic">{index + 1} </span>
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="text-lg font-normal italic">
              <p>{work.title}</p>
            </ItemTitle>
            <ItemDescription className="text-foreground/80">
              {authorString}
            </ItemDescription>
            <ItemDescription className="italic">{work.journal}</ItemDescription>
            <ItemDescription className="mt-1 flex w-full flex-wrap items-center gap-2 text-sm">
              <Badge className="px-1 font-mono tabular-nums">{work.year}</Badge>
              {work.tags?.map((tag: string) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className={`${
                    tag === "theory"
                      ? "bg-lime-600 text-white dark:bg-lime-700"
                      : tag === "algorithm"
                        ? "bg-orange-300 text-black dark:bg-orange-300 dark:text-black"
                        : ""
                  } px-1 font-mono`}
                >
                  {tag}
                </Badge>
              ))}
              <Badge variant="secondary" className="bg-gray-200 px-1 font-mono">
                {type}
              </Badge>
              <Badge
                variant="outline"
                className="px-3 font-mono [a&]:no-underline [a&]:hover:text-orange-500 dark:[a&]:hover:text-orange-400"
                asChild
              >
                <a href={workURL} target="_blank" rel="noopener noreferrer">
                  URL
                </a>
              </Badge>
              <Badge
                variant="outline"
                className="px-3 font-mono [a&]:no-underline [a&]:hover:text-orange-500 dark:[a&]:hover:text-orange-400"
                asChild
              >
                <a href={pdfLink} target="_blank" rel="noopener noreferrer">
                  PDF
                </a>
              </Badge>
            </ItemDescription>
          </ItemContent>
        </Item>
      </AccordionTrigger>
      <AccordionContent className="pl-12 text-base">
        {work.description && <p>{work.description}</p>}
        {work.supplementary && <MDX components={getMDXComponents()} />}
      </AccordionContent>
    </AccordionItem>
  )
}
