const packageJson = require("./package.json");
const deps = packageJson.dependencies;

module.exports = {
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
        remoteType: "var",
        remotes: {
          task_tracker_components:
            "task_tracker_components",
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
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

    // config.module.rules.push({
    //   test: /_app.js/,
    //   loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
    // });

    return config;
  },
};
