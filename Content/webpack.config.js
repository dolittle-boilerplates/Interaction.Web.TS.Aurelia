const path = require('path');
require('dotenv').config();

process.env.DOLITTLE_WEBPACK_ROOT = path.resolve('../Core');
process.env.DOLITTLE_WEBPACK_OUT = path.resolve('../Core/wwwroot');
process.env.DOLITTLE_FEATURES_DIR = path.resolve('./Features');
process.env.DOLITTLE_COMPONENT_DIR = path.resolve('./Components');

const config = require('@dolittle/build.aurelia/webpack.config.js');

module.exports = () => {
  const webpackConfig = config.apply(null, arguments);

  webpackConfig.resolve.alias = {
    DolittleStyles: path.resolve(__dirname, './styles')
  };

  //This will be removed when the boilerplate upgrades to using the new TS build pipeline 
  webpackConfig.resolve.extensions.push('.ts');
  webpackConfig.module.rules.push({ test: /\.ts$/, loader: 'ts-loader' });

  return webpackConfig;
};
