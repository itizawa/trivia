// On production, variables are set with `now secrets`. On development, they use the .env file
require('dotenv').config();
const path = require('path');

module.exports = {
  webpack(config, options) {
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@widgets'] = path.join(__dirname, 'components/widgets');
    config.resolve.alias['@containers'] = path.join(__dirname, 'containers');
    config.resolve.alias['@utils'] = path.join(__dirname, 'lib/utils');
    config.resolve.alias['@middlewares'] = path.join(__dirname, 'lib/middlewares');
    config.resolve.alias['@lib'] = path.join(__dirname, 'lib');
    config.resolve.alias['@context'] = path.join(__dirname, 'context');
    config.resolve.alias['@models'] = path.join(__dirname, 'models');
    return config;
  },
};
