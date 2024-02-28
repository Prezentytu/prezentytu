import Link from 'next/link'
import { MobileNav } from './mobile-nav'
import { ModeToggle } from './theme-toggle'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function Topbar() {
  return (
    <div className=' border-b'>
      <div className='flex h-16 items-center px-4'>
        <Link href='/'>Listeo</Link>
        <div className='ml-auto flex items-center space-x-4'>
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
  )
}
