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
  env: {
    MONGO_URI: process.env.MONGO_URI,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    GOOGLE_AUTH_DOMAIN: process.env.GOOGLE_AUTH_DOMAIN,
    GOOGLE_DATABASE_URL: process.env.GOOGLE_DATABASE_URL,
    GOOGLE_PROJECT_ID: process.env.GOOGLE_PROJECT_ID,
    GOOGLE_STORAGE_BUCKET: process.env.GOOGLE_STORAGE_BUCKET,
    GOOGLE_MESSAGING_SENDER_ID: process.env.GOOGLE_MESSAGING_SENDER_ID,
    GOOGLE_APP_ID: process.env.GOOGLE_APP_ID,
  },
};
