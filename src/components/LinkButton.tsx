import React from 'react'
import { Button } from '@/components/ui/button'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  href: string
  children: ReactNode
  className?: string
}

export default function LinkButton({ href, children, className }: Props) {
  return (
    <div className="not-prose flex justify-center">
      <Button
        variant="outline"
        asChild
        className={cn(
          'hover:text-orange-500 dark:hover:text-orange-500',
          className
        )}
      >
        <a href={href}>{children}</a>
      </Button>
    </div>
  )
}
