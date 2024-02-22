import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Sidebar } from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prezentytu',
  description: 'App for managing presents'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className=' border-b'>
          <div className='flex h-16 items-center px-4'>
            Prezentytu
            <div className='ml-auto flex items-center space-x-4'>
              <Avatar>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className='flex'>
          <Sidebar />
          <div className='w-full px-4 py-2'>{children}</div>
        </div>
      </body>
    </html>
  )
}
