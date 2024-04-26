/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: false,
        taint: true,
    },
    images: {
        domains: ['avatars.githubusercontent.com'],
    },
}

export default nextConfig