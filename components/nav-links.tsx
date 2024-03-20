'use client'
import Link from 'next/link'

interface NavigationLinksProps {
  className?: string
  onOpenChange?: (isOpen: boolean) => void
}

export const navigationLinks = [
  { title: 'Dodaj listę', href: '/dashboard/add-list' },
  { title: 'Zarządzaj listami', href: '/dashboard/manage-lists' },
  { title: 'Feedback', href: '/dashboard/feedback' }
]

export const NavigationLinks = ({
  className,
  onOpenChange
}: NavigationLinksProps) => {
  const handleLinkClick = (href: string) => {
    onOpenChange?.(false)
  }

  return (
    <>
      {navigationLinks.map(link => (
        <Link key={link.href} href={link.href}>
          <div className={className} onClick={() => handleLinkClick(link.href)}>
            {link.title}
          </div>
        </Link>
      ))}
    </>
  )
}
