const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, options) => ({
  // mode - Chosen mode tells webpack to use its built-in optimizations accordingly.
  // entry
  // output
  // module - configuration regarding modules
  // devtools - enhance debugging by adding meta info for the browser devtools
  // target - the environment in which the bundle should run changes chunk loading behavior and available modules
  // externals - Don't follow/bundle these modules, but request them at runtime from the environment
  // stats - lets you precisely control what bundle information gets displayed

  mode: "development",
  entry: {
    app: "./js/app.js",
    post_edit: "./js/post_edit.js",
    snap_edit: "./js/snap_edit.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../priv/static/js"),
    chunkFilename: '[name].bundle.js',
    publicPath: '/js/',
    // Do I need a public path?
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    },
    usedExports: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name(file) {
              return "[name]_[hash].[ext]";
            },
            outputPath: "../fonts/"
          }
        }
      }
    ]
  },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "../css/[name].bundle.css" }),
    new CopyWebpackPlugin([{ from: "static/", to: "../" }]),
    new BundleAnalyzerPlugin()
  ]
});
