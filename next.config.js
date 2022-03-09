const packageJson = require("./package.json");
const deps = packageJson.dependencies;

module.exports = {
  react: {
    useSuspense: false,
    wait: true,
  },
  webpack: (config, { webpack }) => {
    const { ModuleFederationPlugin } = webpack.container;

    config.plugins.push(
      new ModuleFederationPlugin({
        name: "mfw_folder",
        library: {
          type: config.output.libraryTarget,
          name: "mfw_folder",
        },
        filename: "static/runtime/remoteEntry.js",
        exposes: {
          "./Folder": "./src/Folder",
        },
        remotes: {
          task_tracker_components:
            "task_tracker_components@https://micro-frontwindows-components.vercel.app/_next/static/runtime/remoteEntry.js",
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
          // "@material-ui/core": {
          //   singleton: true,
          // },
          // "@material-ui/icons": {
          //   singleton: true,
          // },
          // "@material-ui/lab": {
          //   singleton: true,
          // },
          // "styled-components": {
          //   singleton: true,
          //   requiredVersion: deps["styled-components"],
          // },
        },
        shared: [],
      })
    );
    return config;
  },
};
