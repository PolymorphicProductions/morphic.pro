const path = require("path");
const glob = require('glob');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, options) => ({
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({ cache: true, parallel: true, sourceMap: false }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: "all"
    },
    usedExports: true
  },

  entry: {
    'app': glob.sync('./vendor/**/*.js').concat(['./js/app.js'])
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../priv/static/js"),
    chunkFilename: '[name].bundle.js',
    publicPath: '/js/',
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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          "postcss-loader"
        ]
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
    new CopyWebpackPlugin({
      patterns: [
        { from: 'static/', to: '../' }
      ]
    })
  ]
});
