const withImages = require('next-images');
require('dotenv').config();
module.exports = withImages({
  webpack(config, options) {
    return config
  },
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN
  }
});
