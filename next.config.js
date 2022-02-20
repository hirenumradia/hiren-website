module.exports = {
  webpack: (config, { webpack, dev, isServer }) => {

    // Support for Markdown files
    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });

    // Support for raw images and 3d Objects
    config.module.rules.push({
      test: /\.gltf$|\.glt$|\.jpg$|\.obj$|\.png$|\.glsl$|\.vert$|\.frag$|\.vs$|\.fs$/,
      loader: "raw-loader"
    });

    // audio support
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    })

    return config;
  },
};
