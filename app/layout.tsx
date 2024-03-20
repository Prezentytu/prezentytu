import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Topbar } from '@/components/topbar'
import ConvexClientProvider from './ConvexClientProvider'
import { Footer } from '@/components/footer'

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
        <ConvexClientProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Topbar />
            <div className='flex'>
              <div className='w-full px-4 py-2'>{children}</div>
            </div>
            <Footer />
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
