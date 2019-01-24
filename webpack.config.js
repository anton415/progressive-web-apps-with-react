module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presents: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      }
    ]
  },
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};
