/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: ""
            },
            {
                protocol: "https",
                hostname: "s3.eu-west-1.amazonaws.com",
                port: ""
            },
            {
                protocol: "https",
                hostname: "tibalab.com",
                port: ""
            }
        ]
    }
};

// export default nextConfig;
export default withNextIntl(nextConfig);
