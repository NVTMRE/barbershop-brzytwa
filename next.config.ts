import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd375139ucebi94.cloudfront.net',
                pathname: '/region2/pl/100880/**',
            },
        ],
    },
};

export default nextConfig;
