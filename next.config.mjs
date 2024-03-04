/** @type {import('next').NextConfig} */
import pkg from './package.json' assert { type: 'json' }

const version = pkg.version

const nextConfig = {
  publicRuntimeConfig: {
    version
  }
}

export default nextConfig
