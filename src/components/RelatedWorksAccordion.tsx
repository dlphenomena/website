import { RelatedWork } from '@/components/RelatedWork'
import { Accordion } from '@/components/ui/accordion'
import type { CollectionEntry } from 'astro:content'

interface Props {
  works: CollectionEntry<'references'> | null
}

export function RelatedWorksAccordion({ works }: Props) {
  if (!works) {
    return
  } else {
    const { data, id } = works
    return (
      <>
        <h2 className="mt-20 mb-6 text-2xl">References</h2>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {data.map((work, index) => (
            <RelatedWork key={id} index={index} work={work} worksId={id} />
          ))}
        </Accordion>
      </>
    )
  }
}
