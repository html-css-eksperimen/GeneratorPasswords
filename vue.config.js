const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/generator-password-sandi/'
    : '/',
  productionSourceMap: false,
  integrity: true,
  crossorigin: 'anonymous',
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
    config.plugin('scriptexthtmlwebpack')
      .use(ScriptExtHtmlWebpackPlugin, [{
        defaultAttribute: 'defer',
      }]);
  },
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(js|css)$'),
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false,
      }),
    ],
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 100000,
      },
    },
  },
};
