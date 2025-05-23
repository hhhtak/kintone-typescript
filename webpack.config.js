const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: {
    "kintone-typescript-sample": "./src/kintone-typescript-sample.ts",
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  module: {
    rules: [{ test: /\.(ts|js)x?$/, loader: "babel-loader", exclude: /node_modules/ }],
  },

  plugins: [new ForkTsCheckerWebpackPlugin()],
};
