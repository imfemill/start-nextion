// next.config.js
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true'
});

module.exports = bundleAnalyzer({
    // your existing Next.js config here
    turbopack: {
        resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json']
    },
    compiler: {
        styledComponents: true
    }
});
