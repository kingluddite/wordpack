const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config = {
  entry: {
    app: './assets/src/js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    // filename: 'js/[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer()],
              },
            },
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('/css/[name].css'),
    new BrowserSyncPlugin({
      proxy: 'webpackhmr.local',
      port: 3000,
      files: ['**/*.php'],
      ghostMode: {
        clicks: false,
        location: false,
        forms: false,
        scroll: false,
      },
      injectChanges: true,
      logFileChanges: true,
      logLevel: 'debug',
      logPrefix: 'webpack',
      notify: true,
      reloadDelay: 0,
    }),
  ],
  watch: true,
  devtool: 'cheap-eval-source-map',
};

// if true JS and CSS files will be minified
if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new UglifyJSPlugin(), new OptimizeCssAssetsPlugin());
}

module.exports = config;
