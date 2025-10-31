import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SubmissionPage() {
  return (
    <div className="pt-12">
      <h1 className="mb-4 text-center text-4xl font-bold">Submission Guide</h1>
      <p className="text-center">
        Submissions can be made through GitHub issue (with template) by clicking
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
      <hr className="border-top mb-8 border-zinc-400" />
      <section className="mb-12 text-center">
        <h2 className="mb-6 text-center text-3xl font-bold">
          Submit a Phenomenon
        </h2>
        <div className="mb-8 rounded-lg bg-blue-50 p-8 dark:bg-blue-900/20">
          <h3 className="mb-4 text-xl font-semibold text-blue-800 dark:text-blue-200">
            📝 Submission Requirements
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Please submit the phenomenon by a Markdown file. The templates can
            be seen in our{" "}
            <Link
              href="https://github.com/dlphenomena/website/tree/main/src/content/blog"
              className="font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Github Repository
            </Link>
            .
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Please also prepare a code to reproduce the phenomenon. A new
            repository will be created in {""}
            <Link
              href="https://github.com/dlphenomena"
              className="font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Deep Learning Phenomena
            </Link>{" "}
            on GitHub.
          </p>
        </div>
      </section>
      <section className="mb-12 text-center">
        <h2 className="mb-6 text-3xl font-bold">
          Submit a Related Reference to an Existing Phenomenon
        </h2>

        <div className="mb-8 rounded-lg bg-green-50 p-8 dark:bg-green-900/20">
          <h3 className="mb-4 text-xl font-semibold text-green-800 dark:text-green-200">
            📚 Suggested Format
          </h3>

          <div className="mb-6 rounded-lg bg-white p-6 dark:bg-gray-800">
            <h4 className="mb-3 font-semibold text-gray-800 dark:text-gray-200">
              Format Template:
            </h4>
            <div className="rounded bg-gray-100 p-4 font-mono text-sm dark:bg-gray-700">
              <p>
                <strong>TAG</strong>, Last Name1, First name1; Last Name2, First
                name2; ...; Last NameN, First nameN; <em>Paper Title</em>,
                Journal/Conference (Hyperlink to the paper), year. (Chicago Form
                in google scholar)
              </p>
              <br />
              <p>
                <strong>TL, DR;</strong> One or two sentences for explanation,
                with necessary formula or figures.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">
                Note:
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                The TAG can be &quot;theory&quot;, &quot;algorithm&quot;,
                &quot;application&quot; etc.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">
                Examples:
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Examples can be found in{" "}
                <Link
                  href="/phenomena/f-principle/f-principle"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  Frequency-Principle
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="mb-6 text-center text-3xl font-bold">
          Additional Information
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col rounded-lg bg-purple-50 p-2 pl-8 dark:bg-purple-900/20">
            <h3 className="pl-4 text-lg font-semibold text-purple-800 dark:text-purple-200">
              🔗 Useful Links
            </h3>
            <ul className="text-gray-700 dark:text-gray-300">
              <li>
                <Link
                  href="https://github.com/dlphenomena/website"
                  className="text-blue-600 dark:text-blue-400"
                >
                  Website Repository
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/dlphenomena"
                  className="text-blue-600 dark:text-blue-400"
                >
                  Deep Learning Phenomena Repository
                </Link>
              </li>
              <li>
                <Link
                  href="/phenomena/f-principle/f-principle"
                  className="text-blue-600 dark:text-blue-400"
                >
                  Frequency-Principle Example
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col rounded-lg bg-orange-300/20 p-2 pl-8 dark:bg-orange-600/20 prose-ul:list-none">
            <h3 className="pl-4 text-lg font-semibold text-orange-800 dark:text-orange-200">
              📋 Submission Checklist
            </h3>
            <ul className="text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-xl font-bold text-green-600">✓</span>{" "}
                Markdown file following template format
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl font-bold text-green-600">✓</span>{" "}
                Reproducible code implementation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl font-bold text-green-600">✓</span>{" "}
                Proper citation format (Chicago style)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl font-bold text-green-600">✓</span>{" "}
                Clear TL;DR explanation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl font-bold text-green-600">✓</span>{" "}
                Relevant formulas or figures
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
