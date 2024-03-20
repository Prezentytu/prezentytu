'use client'

import { Sheet, SheetTrigger, SheetContent } from './ui/sheet'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useState } from 'react'
import { NavigationLinks } from './nav-links'

export function MobileNav() {
  const [open, setOpen] = useState(false)
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
          <NavigationLinks className='mt-4' onOpenChange={setOpen} />
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
