import { Button } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { IoArrowUp } from 'react-icons/io5'

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return

    const handleScroll = () => {
      if (typeof window !== 'undefined' && window.scrollY > 10) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

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
        className="fixed right-4 bottom-4 prose rounded-lg border-2 border-orange-300 p-3 opacity-80 shadow-lg backdrop-blur-md data-[hover]:bg-orange-300 dark:border-zinc-600 dark:prose-invert dark:data-[hover]:bg-zinc-600"
      >
        <IoArrowUp />
      </Button>
    )
  )
}
