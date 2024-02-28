'use client'

import * as React from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

const sidebarNavConfig = [
  {
    title: 'Lista',
    items: [
      { title: 'Dodaj listę', href: '/dashboard/add-list' },
      { title: 'Zarządzaj listami', href: '/dashboard/manage-lists' }
    ]
  }
]

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          className='mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden'
        >
          <svg
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
          >
            <path
              d='M3 5H11'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M3 12H16'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M3 19H21'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='top' className='flex h-full flex-col pr-0'>
        <ScrollArea className='my-4 flex-1 pb-10 pl-6'>
          <div className='flex flex-col space-y-3'>
            {sidebarNavConfig.map((section, index) => (
              <div key={index} className='flex flex-col space-y-3 pt-6'>
                <h4 className='font-bold'>{section.title}</h4>
                {section.items.map(item => (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                    className='text-muted-foreground'
                  >
                    {item.title}
                  </MobileLink>
                ))}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className='mt-auto'>
          <div className='fixed inset-x-0 bottom-0 flex justify-center border-t px-6 py-4'>
            <Button
              variant='outline'
              className='flex w-4/5 justify-center'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <div className='flex items-center justify-center space-x-2'>
                <Sun className='h-6 w-6 dark:hidden' />
                <Moon className='hidden h-6 w-6 dark:block' />
                <span>Zmień motyw</span>
              </div>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
