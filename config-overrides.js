const path = require("path");

const { injectBabelPlugin, compose } = require("react-app-rewired");
//const rewireLess = require("react-app-rewire-less");
const rewireLess = require("react-app-rewire-less-modules");
const rewireVendorSplitting = require("react-app-rewire-vendor-splitting");

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = function override(config, env) {
  if (env === "development") {
    config = injectBabelPlugin(["dva-hmr"], config);
  }

  config = injectBabelPlugin(
    ["import", { libraryName: "antd", style: true, libraryDirectory: "es" }],
    config
  );

  if (env === "production") {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false
      })
    );
  }

  const rewires = compose(
    rewireLess.withLoaderOptions(
      `${env === "production" ? "app" : "[local]"}-[hash:base64:8]`,
      {
        modifyVars: {
          "@primary-color": "#ff79c6",
          "@info-color": "#61dafb",
          "@layout-body-background": "#EEEEF0",
          "@layout-header-background": "#fff",
          "@layout-sider-background": "#282A36",
          "@menu-dark-bg": "#282A36",
          "@menu-dark-submenu-bg": "#21222c",
        }
      }
    ),
    rewireVendorSplitting
  );

  return rewires(config, env);
};
