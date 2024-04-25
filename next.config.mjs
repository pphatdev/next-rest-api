/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: false,
        taint: true,
    },
}

export default nextConfig