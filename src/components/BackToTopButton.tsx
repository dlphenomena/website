import React, { useState, useEffect } from 'react'
import { IoArrowUp } from "react-icons/io5";
import { Button } from '@headlessui/react'

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const handleScroll = () => {
    if (typeof window !== 'undefined' && window.scrollY > 10) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMounted])

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (!isMounted) {
    return <div />
  }

  return (
    isVisible && (
      <Button
        onClick={scrollToTop}
        className="prose dark:prose-invert fixed bottom-4 right-4 rounded-lg border-2 opacity-80 backdrop-blur-md border-orange-300 dark:border-zinc-600 p-3 shadow-lg data-[hover]:bg-orange-300 dark:data-[hover]:bg-zinc-600"
      >
        <IoArrowUp />
      </Button>
    )
  )
}
