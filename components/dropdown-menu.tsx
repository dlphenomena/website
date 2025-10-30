"use client"

import DropdownMenuItem from "@/components/dropdown-menu-item"
import { Menu, MenuButton, MenuItems, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { IoMenu } from "react-icons/io5"

export interface headerLink {
  href: string
  text: string
}

export default function DropdownMenu({
  tags,
  className,
}: {
  tags: headerLink[]
  className?: string
}) {
  return (
    <Menu as="div" className={`relative inline-block text-left ${className}`}>
      <div>
        <MenuButton
          className="inline-flex justify-center rounded-md border border-zinc-400 px-2 py-2 text-sm font-medium shadow-sm transition-all hover:bg-orange-200 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 focus:outline-none dark:border-zinc-700 dark:hover:bg-zinc-800"
          aria-label="menu"
        >
          <IoMenu className="h-5 w-5" />
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="ring-opacity-5 absolute right-0 z-10 mt-2 w-56 origin-top-right divide-zinc-400 rounded-md border border-zinc-400 bg-slate-50 shadow-xl ring-1 ring-black focus:outline-none dark:divide-zinc-700 dark:border-zinc-700 dark:bg-zinc-800">
          <div className="py-1">
            <div className="px-3 py-2 text-xs font-bold uppercase">Menu</div>
            {tags.map((tag) => {
              return (
                <DropdownMenuItem key={tag.href} href={tag.href}>
                  {tag.text}
                </DropdownMenuItem>
              )
            })}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}
