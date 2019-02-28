const path = require('path')


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
          'style-loader',
          'css-loader', 
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: '[path][name].[ext]',
            outputPath: 'img/'
          }
        }
      }
    ]
  },

  devtool: 'eval'
}