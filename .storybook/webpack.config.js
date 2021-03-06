
const path = require('path');

// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Extend it as you need.

  // For example, add less loader:
  config.module.rules.push({
    test: /\.less$/,
    include: path.resolve(__dirname, '../'),
    loaders: ['style-loader', 'css-loader', 'less-loader']
  });
  config.resolve.extensions.push('.less');

  return config;
};