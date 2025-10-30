"use client"

import { Button } from "@headlessui/react"
import { Activity, useEffect, useState } from "react"
import { IoArrowUp } from "react-icons/io5"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return

    const handleScroll = () => {
      if (typeof window !== "undefined" && window.scrollY > 10) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMounted])

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  if (!isMounted) {
    return <div />
  }

  return (
    <Activity mode={isVisible ? "visible" : "hidden"}>
      <Button
        onClick={scrollToTop}
        className="prose dark:prose-invert fixed right-4 bottom-4 rounded-lg border-2 border-orange-300 p-3 opacity-80 shadow-lg backdrop-blur-md data-[hover]:bg-orange-300 dark:border-zinc-600 dark:data-[hover]:bg-zinc-600"
      >
        <IoArrowUp />
      </Button>
    </Activity>
  )
}
