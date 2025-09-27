import React from 'react'
import { IoMail } from 'react-icons/io5'
import { Button } from '@/components/ui/button'

export default function EmailButton() {
  return (
    <div className="flex justify-center">
      <Button
        variant="outline"
        asChild
        className="hover:text-orange-500 dark:hover:text-orange-500"
      >
        <a href="/cv.pdf">
          <IoMail /> Contact with me
        </a>
      </Button>
    </div>
  )
}
