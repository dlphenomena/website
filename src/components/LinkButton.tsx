import React from 'react'
import { Button } from '@/components/ui/button'
import type { ReactNode } from 'react'

interface Props {
  href: string
  children: ReactNode
}

export default function LinkButton({ href, children }: Props) {
  return (
    <div className="not-prose flex justify-center">
      <Button
        variant="outline"
        asChild
        className="hover:text-orange-500 dark:hover:text-orange-500"
      >
        <a href={href}>{children}</a>
      </Button>
    </div>
  )
}
