module.exports = {
  mode: "development",
  devtool: 'inline-source-map',
  entry: "./digda/index.js",
  output: {
    library: "Digda",
    libraryExport: "default",
    libraryTarget: "umd",
    globalObject: 'this',
    filename:"digda.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
  }
};