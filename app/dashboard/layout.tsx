import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prezentytu',
  description: 'Aplikacja do zarządzania listami prezentów'
}

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <div className='container mx-auto'>{children}</div>
    </main>
  )
}
