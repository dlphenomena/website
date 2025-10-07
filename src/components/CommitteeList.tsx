import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from '@/components/ui/item'
import { ExternalLinkIcon } from 'lucide-react'
import React from 'react'

export interface Member {
  name: string
  affiliation: string
  url: string
}

export function CommitteeList({ committees }: { committees: Member[] }) {
  return (
    <ItemGroup className="gap-6 not-prose">
      {committees.map((member, index) => (
        <Item
          key={index}
          variant="outline"
          asChild
          className="[a]:hover:bg-orange-100 dark:[a]:hover:bg-zinc-800"
        >
          <a href={member.url} target="_blank" rel="noreferrer">
            <ItemContent>
              <ItemTitle className="font-bold text-xl">{member.name}</ItemTitle>
              <ItemDescription className="mt-4 text-lg">
                {member.affiliation}
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <ExternalLinkIcon />
            </ItemActions>
          </a>
        </Item>
      ))}
    </ItemGroup>
  )
}
