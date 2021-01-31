const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBar = require("webpackbar");

const isProduction = ["build", "analyze"].includes(
  process.env.npm_lifecycle_event
);

const config = {
  mode: isProduction ? "production" : "development",

  stats: "errors-only",

  plugins: [new HtmlWebpackPlugin(), new WebpackBar()],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  resolve: {
    modules: ["src", "node_modules"],
  },

  devServer: {
    open: true,
    host: "localhost",
  },
};

if (!isProduction) {
  config.devtool = "inline-source-map";
}

module.exports = config;
