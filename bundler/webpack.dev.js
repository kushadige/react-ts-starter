const path = require("path");
const { merge } = require("webpack-merge");
const commonConfigs = require("./webpack.common.js");
const portFinderSync = require("portfinder-sync");

module.exports = merge(commonConfigs, {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../dist"),
    },
    port: portFinderSync.getPort(8080),
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
});
