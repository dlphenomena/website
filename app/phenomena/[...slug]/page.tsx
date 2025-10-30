import { RelatedWorksAccordion } from "@/components/relatedworks-accordion"
import { source } from "@/lib/source"
import { getMDXComponents } from "@/mdx-components"
import { notFound } from "next/navigation"

export default async function PhenomenaPage(
  props: PageProps<"/phenomena/[...slug]">,
) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) {
    notFound()
  }
  const MDX = page.data.body
  const readingTime = page.data._exports.readingTime as { text: string }

  // @ts-expect-error this is intended
  const modifiedTime = new Date(page.data.lastModified)

  const baseDir = params.slug[0]
  const works = await import(
    `@/content/phenomena/${baseDir}/${page.data.relatedWorks}`
  )

  return (
    <>
      <h1 className="pt-12">{page.data.title}</h1>
      <p>{page.data.description}</p>
      <p className="opacity-75">Contributors: {page.data.author}</p>
      <p className="mb-4 text-sm opacity-75">
        Last modified: {modifiedTime.toDateString()} · {readingTime.text}
      </p>
      <hr />
      <MDX components={getMDXComponents()} />
      {works && (
        <RelatedWorksAccordion baseDir={baseDir} works={works.default} />
      )}
    </>
  )
}

export async function generateStaticParams() {
  return source.generateParams()
}
