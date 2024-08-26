/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix:
        process.env.NODE_ENV === "production"
            ? "https://oasiswatts.github.io/crankie-landing-fe/"
            : "",
}

module.exports = nextConfig
