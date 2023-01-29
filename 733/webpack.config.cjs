const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "production",
  target: "node",
  entry: path.resolve(__dirname, "./src/index.mjs"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.cjs",
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        exclude: [/node_modules/, /__tests__/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
