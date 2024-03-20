import Link from 'next/link'
import { MobileNav } from './mobile-nav'
import { ModeToggle } from './theme-toggle'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { NavigationLinks } from './nav-links'

export function Topbar() {
  return (
    <div className='w-full border-b'>
      <div className='relative flex h-16 items-center justify-center px-4'>
        <div className='absolute left-4 top-1/2 -translate-y-1/2 transform'>
          <Link href='/'>Listeo</Link>
        </div>
        <div className='flex items-center justify-center gap-8 max-lg:hidden'>
          <NavigationLinks onOpenChange={undefined} className='' />
        </div>
        <div className='absolute right-4 top-1/2 -translate-y-1/2 transform'>
          <div className='flex items-center gap-2'>
            <MobileNav />
            <ModeToggle />
            <Avatar>
              <AvatarImage
                alt='avatar image'
                src='https://github.com/shadcn.png'
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  )
}
