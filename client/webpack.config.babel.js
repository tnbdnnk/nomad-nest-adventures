import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";
import webpack from "webpack";

const { DefinePlugin } = webpack;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/nomad-nest-adventures", // Ensure this matches your basename
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      src: path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new DefinePlugin({
      "process.env.API": JSON.stringify(
        "https://nomad-nest-adventures.onrender.com/api"
      ),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: {
      index: "/nomad-nest-adventures", // Ensure this matches your basename
    },
  },
  mode: "development",
};

// Check for missing dependencies
import("webpack").catch((err) => console.error("Webpack not found", err));
import("babel-loader").catch((err) =>
  console.error("Babel-loader not found", err)
);
import("html-webpack-plugin").catch((err) =>
  console.error("Html-webpack-plugin not found", err)
);
