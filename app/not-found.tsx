import Link from "next/link"
import { IoChevronForward } from "react-icons/io5"

export default function NotFoundPage() {
  return (
    <main className="pt-14">
      <section>
        <h1 className="mt-12 mb-8 text-center text-3xl">Oops, not found</h1>
        <div className="py-4 text-center">
          <Link
            className="inline-flex items-center gap-1 underline decoration-orange-500 underline-offset-2"
            href="/"
          >
            Go to Home <IoChevronForward />
          </Link>
        </div>
      </section>
    </main>
  )
}
