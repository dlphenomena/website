import { TeamMembers } from "@/components/team-members"
import { members } from "@/lib/db/team"

export default function TeamPage() {
  return (
    <section className="pt-12">
      <h1 className="text-center">Team Members</h1>
      <div className="-mt-4 text-center text-2xl font-semibold opacity-75">
        (Alphabetical Order)
      </div>
      <div className="mt-15 px-4">
        <TeamMembers members={members} />
        <div className="mt-10"></div>
      </div>
    </section>
  )
}
