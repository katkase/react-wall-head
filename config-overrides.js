const { injectBabelPlugin, compose } = require('react-app-rewired');
const rewireLess = require("react-app-rewire-less-modules");

module.exports = function override(config, env) {
  config = rewireLess(config, env);
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  config = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "#1DA57A" },
  })(config, env);
  return config;
};