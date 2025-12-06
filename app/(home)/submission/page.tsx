import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SubmissionPage() {
  return (
    <div className="pt-12">
      <h1 className="mb-4 text-center text-4xl font-bold">Submission Guide</h1>
      <p className="text-center">
        You can add a reference to an existing phenomenon or submit a new
        phenomenon. Submissions can be made through GitHub issue (with template)
        by clicking
      </p>
      <div className="not-prose flex justify-center">
        <Button variant="github" className="not-prose flex justify-center">
          <Link href="https://github.com/dlphenomena/website/issues/new/choose">
            Create a submission
          </Link>
        </Button>
      </div>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300">
        You can also submit via email to{" "}
        <Link href="mailto:xuzhiqin@sjtu.edu.cn" className="opacity-70">
          xuzhiqin@sjtu.edu.cn.
        </Link>
      </p>
    </div>
  )
}
