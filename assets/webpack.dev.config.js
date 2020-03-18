const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Jarvis = require("webpack-jarvis");

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
    app: "./js/app.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../priv/static/js")
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
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "../css/app.css" }),
    new CopyWebpackPlugin([{ from: "static/", to: "../" }]),
    new Jarvis({
      port: 1337 // optional: set a port
    })
  ]
});
