import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export function Footer() {
  return (
    <footer className='fixed inset-x-0 bottom-0'>
      <div className='flex h-16 items-center justify-center'>
        <div className='flex items-center space-x-4'>
          <p>v{publicRuntimeConfig?.version}</p>
        </div>
      </div>
    </footer>
  )
}
