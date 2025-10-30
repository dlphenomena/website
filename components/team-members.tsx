import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { type Member } from "@/lib/db/team"
import { ExternalLinkIcon } from "lucide-react"

function getInitials(fullName: string) {
  // Trim leading/trailing spaces and split the name by spaces
  const nameParts = fullName.trim().split(" ")
  let initials = ""

  // Iterate over each part of the name
  for (let i = 0; i < nameParts.length; i++) {
    // If the part is not empty, add its first character (uppercased) to initials
    if (nameParts[i].length > 0) {
      initials += nameParts[i][0].toUpperCase()
    }
  }
  return initials
}

export function TeamMembers({ members }: { members: Member[] }) {
  return (
    <ItemGroup className="not-prose gap-6">
      {members.map((member) => (
        <Item
          key={member.url}
          variant="outline"
          asChild
          className="[a]:hover:bg-orange-100 dark:[a]:hover:bg-zinc-800"
        >
          <a href={member.url}>
            <ItemMedia>
              <Avatar className="size-18">
                <AvatarImage src={member.avatar} alt="avatar" />
                <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-xl font-bold">{member.name}</ItemTitle>
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
