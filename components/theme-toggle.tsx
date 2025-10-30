"use client"

import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { useTheme } from "next-themes"
import { Activity, useEffect, useState } from "react"
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
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Set mounted on first render
  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light"
    setTheme(t)
  }

  return (
    <Activity mode={mounted ? "visible" : "hidden"}>
      <div className="inline-flex items-center rounded-3xl bg-orange-300 p-px dark:bg-zinc-600">
        {themes.map((t) => {
          const active = t === theme
          return (
            <button
              key={t}
              type="button"
              className={cn(itemVariants({ active: active }))}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              data-theme-toggle=""
            >
              {t === "light" ? <IoSunny /> : <IoMoon />}
            </button>
          )
        })}
      </div>
    </Activity>
  )
}
