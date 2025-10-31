import DropdownMenu from "@/components/dropdown-menu"
import HeaderLinks from "@/components/header-links"
import ThemeToggle from "@/components/theme-toggle"
import Logo from "@/public/cat.png"
import Image from "next/image"
import Link from "next/link"

const headerLinks = [
  { href: "/about", text: "About" },
  { href: "/team", text: "Team" },
  { href: "/submission", text: "Submission" },
  { href: "mailto:xuzhiqin@sjtu.edu.cn", text: "Contact" },
  { href: "https://github.com/dlphenomena", text: "Repos" },
]

export default function Header() {
  return (
    <header className="fixed z-20 w-full border-b border-border p-2 backdrop-blur-md transition-shadow duration-300 dark:border-zinc-700">
      <div className="mx-auto max-w-4xl">
        <nav className="flex items-center gap-3">
          <Link href="/" className="group flex flex-auto items-center">
            <Image
              className="h-8 w-8 rounded-full dark:invert"
              src={Logo}
              alt="Logo"
            />
            <h2 className="p-2 text-lg font-semibold tracking-tighter">Home</h2>
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <HeaderLinks />
          </div>
          <div className="flex-1"></div>
          <ThemeToggle />
          <DropdownMenu tags={headerLinks} className="md:hidden" />
        </nav>
      </div>
    </header>
  )
}
