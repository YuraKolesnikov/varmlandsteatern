const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer')
const TerserPlugin = require('terser-webpack-plugin')
const cssnano = require('cssnano')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-0']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
                sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers:['ie >= 8', 'last 4 version']
                }),
                cssnano()
              ],
              sourceMap: true
            }
          },
          'sass-loader'
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: '[name].[ext]',
            outputPath: 'img/'
          }
        }
      }
    ]
  },
  
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ],
  
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.m?js(\?.*)?$/i,
        exclude: /node_modules/,
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
    overlay: true
  },

  devtool: 'eval'
}