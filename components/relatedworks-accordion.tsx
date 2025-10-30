import { RelatedWork } from "@/components/related-work"
import { Accordion } from "@/components/ui/accordion"
import { type Reference } from "@/lib/db/reference"

export function RelatedWorksAccordion({
  baseDir,
  works,
}: {
  baseDir: string | URL
  works: Reference[]
}) {
  if (!works) {
    return
  } else {
    works.sort((a, b) => b.year - a.year) // Sort by year descending
    return (
      <>
        <h2 className="mt-20 mb-6 text-2xl">Related Works</h2>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {works.map((work, index) => (
            <RelatedWork
              baseDir={baseDir}
              key={index}
              index={index}
              work={work}
            />
          ))}
        </Accordion>
      </>
    )
  }
}
