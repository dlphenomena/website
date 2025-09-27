import React from 'react'
import { Button } from '@/components/ui/button'
import { IoMail } from 'react-icons/io5'

export default function EmailButton() {
  return (
    <div className="flex justify-center">
      <Button
        variant="outline"
        asChild
        className="hover:text-orange-500 dark:hover:text-orange-500"
      >
        <a href="malto:zhengma@sjtu.edu.cn">
          <IoMail /> Contact with me
        </a>
      </Button>
    </div>
  )
}
