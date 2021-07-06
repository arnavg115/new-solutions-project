const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx", "tsx", "ts"],
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "images.unsplash.com"],
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, webpack, typescript }
  ) => {
    config.experiments = {
      topLevelAwait: true,
    };
    return config;
  },
});
