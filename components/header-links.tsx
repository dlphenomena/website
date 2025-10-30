"use client"

import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoLogoGithub } from "react-icons/io5"

const linkStatus = cva("inline-flex items-center gap-1 no-underline", {
  variants: {
    active: {
      true: "font-bold underline decoration-orange-500 decoration-2 underline-offset-23",
      false: "",
    },
  },
})

function HeaderLink({
  className,
  href,
  children,
}: {
  className?: string
  href: string
  children: React.ReactNode
}) {
  const isActive = href === usePathname()
  return (
    <Link
      href={href}
      className={cn(linkStatus({ active: isActive }), className)}
    >
      {children}
    </Link>
  )
}

export default function HeaderLinks() {
  return (
    <>
      <HeaderLink href="/about">About</HeaderLink>
      <HeaderLink href="/team">Team</HeaderLink>
      <HeaderLink href="/submission">Submission</HeaderLink>
      <HeaderLink href="mailto:xuzhiqin@sjtu.edu.cn">Contact</HeaderLink>
      <HeaderLink
        href="https://github.com/dlphenomena"
        className="flex items-center gap-2"
      >
        <IoLogoGithub />
        Repos
      </HeaderLink>
    </>
  )
}
