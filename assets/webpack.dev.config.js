const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

module.exports = (env, options) => ({
  mode: "development",
  entry: {
    app: glob.sync("./vendor/**/*.js").concat(["./js/app.js"]),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../priv/static/js"),
    chunkFilename: "[name].bundle.js",
    publicPath: "/js/",
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    usedExports: true,
  },
  resolve: {
    fallback: {
      util: require.resolve("util/"),
      tap: require.resolve("tap/"),
    },
  },
  experiments: {
    // outputModule: true,
    syncWebAssembly: true,
    // topLevelAwait: true,
    // asyncWebAssembly: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name(file) {
              return "[name]_[contenthash].[ext]";
            },
            outputPath: "../fonts/",
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  // devtool: "eval-cheap-module-source-map",
  plugins: [
    new HardSourceWebpackPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "../css/[name].bundle.css" }),
    new CopyWebpackPlugin({
      patterns: [{ from: "static", to: "../" }],
    }),
  ],
});
