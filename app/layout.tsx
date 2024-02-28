import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/sidebar'
import { ThemeProvider } from '@/components/theme-provider'
import { Topbar } from '@/components/topbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Listeo',
  description: 'Aplikacja do zarządzania listami prezentów'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Topbar />
          <div className='flex'>
            <Sidebar />
            <div className='w-full px-4 py-2'>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
