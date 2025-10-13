import { RelatedWork } from '@/components/RelatedWork'
import { Accordion } from '@/components/ui/accordion'

interface Props {
  works: any[]
  worksId: string
}

export function RelatedWorksAccordion({ works, worksId }: Props) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {works.map((work, index) => (
        <RelatedWork
          key={worksId}
          index={index}
          work={work}
          worksId={worksId}
        />
      ))}
    </Accordion>
  )
}
