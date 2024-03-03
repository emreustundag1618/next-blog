/** @type {import('next').NextConfig} */
// For external image links do this
const nextConfig = {
    images: {
        domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"]
    }
}

module.exports = nextConfig
