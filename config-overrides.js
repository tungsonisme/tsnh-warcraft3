const { InjectManifest } = require("workbox-webpack-plugin")

module.exports = function override(config) {
  config.module.rules[1].oneOf[1] = {
    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
    use: [
      {
        loader: "url-loader",
        options: {
          limit: false,
          name: "static/media/[name].[hash:8].[ext]",
        },
      },
    ],
  }

  config.plugins[8] = new InjectManifest({
    swSrc: "./src/service-worker.js",
    dontCacheBustURLsMatching: /\.[0-9a-f]{8}\./,
    exclude: [/\.map$/, /asset-manifest\.json$/, /LICENSE/],
    maximumFileSizeToCacheInBytes: 20 * 1024 * 1024, // 20MB
  })

  return config
}
