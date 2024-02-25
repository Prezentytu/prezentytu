import { ModeToggle } from './theme-toggle'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function Topbar() {
  return (
    <div className=' border-b'>
      <div className='flex h-16 items-center px-4'>
        Listeo
        <div className='ml-auto flex items-center space-x-4'>
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
