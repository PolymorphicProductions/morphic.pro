const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// Chuncking?
// Treeshaking? Remove dead code
// Better minimizer output?

module.exports = (env, options) => ({
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({ cache: true, parallel: true, sourceMap: false }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: "all"
    }
  },
  entry: {
    app: "./js/app.js",
    post_edit: "./js/post_edit.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../priv/static/js"),
    chunkFilename: '[name].bundle.js',
    publicPath: '/js/',
    // Do I need a public path?
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
  plugins: [
    new MiniCssExtractPlugin({ filename: "../css/[name].bundle.css" }),
    new CopyWebpackPlugin([{ from: "static/", to: "../" }])
  ]
});
