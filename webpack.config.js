const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./build",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "/build"
  },
  node: {
    fs: "empty"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/, 
        exclude: /node_modules/,
        loaders: ExtractTextPlugin.extract("css-loader!sass-loader")
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loaders: "babel-loader"
      },
      {
        test: /\.pug$/,
        loaders: ["file-loader?name=[name].html", "pug-html-loader?pretty&exports=false"]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css")
  ] 
};