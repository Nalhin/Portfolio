require('dotenv').config()

const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  },
  env: {
    'GITHUB_TOKEN': process.env.GITHUB_TOKEN
  }
});
