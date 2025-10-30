import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const today = new Date()
  return (
    <footer className="p-4 text-center text-zinc-500">
      &copy; {today.getFullYear()} Made by{" "}
      <Link
        href="https://github.com/mazhengcn"
        className="hover:text-orange-500"
      >
        Zheng Ma
      </Link>
      , powered{" "}
      <Link href={"https://nextjs.org/"}>
        by{" "}
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={32}
          height={32}
          className="inline w-12 dark:invert"
        />
      </Link>
      . All rights reserved.
    </footer>
  )
}
