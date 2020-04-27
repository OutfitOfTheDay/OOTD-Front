const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["@babel/polyfill", `${__dirname}/src/index.tsx`],
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  devServer: {
    port: 9000,
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader",
          options: {
            minimize: true,
          },
        }, ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{
          loader: "file-loader",
        }, ],
      },
      {
        test: /\.(png|jpe?g|svg|gif|ttf|woff|woff2|eot|TTF)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]?[hash]",
            publicPath: "./dist/",
            limit: 10000, // 10kb
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};