//var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'index.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      { test: /\.css$/,
        loader: "style-loader!css-loader",
          use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
  /*plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    noInfo: false,
    proxy: {
      '/api/!*': {
        target: 'http://localhost:1234',
        secure: false
      }
    }
  }*/
}
