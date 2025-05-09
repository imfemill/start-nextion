// next.config.js
import withBundleAnalyzer from '@next/bundle-analyzer';
import createMDX from '@next/mdx';

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true'
});

const withMDX = createMDX({
    extension: /\.(md|mdx)$/
});

module.exports = withMDX(
    bundleAnalyzer({
        // your existing Next.js config here
        turbopack: {
            resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json']
        },
        compiler: {
            styledComponents: true
        },
        pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
        experimental: { webpackMemoryOptimizations: true, serverSourceMaps: false },
        productionBrowserSourceMaps: false
    })
);
