"use client"

import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { useTheme } from "next-themes"
import { Activity, useLayoutEffect, useState } from "react"
import { IoMoon, IoSunny } from "react-icons/io5"

const itemVariants = cva("cursor-pointer rounded-3xl p-2", {
  variants: {
    active: {
      true: "bg-white text-black",
      false: "bg-transparent",
    },
  },
})

const themes = ["light", "dark"]

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Set mounted on first render
  useLayoutEffect(() => {
    // eslint-disable-next-line
    setMounted(true)
  }, [])

  const value = mounted ? resolvedTheme : null

  return (
    <Activity mode={mounted ? "visible" : "hidden"}>
      <div className="inline-flex items-center rounded-3xl bg-orange-300 p-px dark:bg-zinc-600">
        {themes.map((key) => {
          return (
            <button
              key={key}
              type="button"
              className={cn(itemVariants({ active: key === value }))}
              onClick={() => setTheme(value === "light" ? "dark" : "light")}
              aria-label="Toggle theme"
              data-theme-toggle=""
            >
              {key === "light" ? <IoSunny /> : <IoMoon />}
            </button>
          )
        })}
      </div>
    </Activity>
  )
}
