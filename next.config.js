const withImages = require('next-images');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withPlugins = require('next-compose-plugins');

require('dotenv').config();
module.exports = withPlugins(
  [
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === 'true',
    }),
    withImages
  ],
  {
    webpack(config, options) {
      config.plugins.push(new LodashModuleReplacementPlugin({ paths: true }));
      return config;
    },
    env: {
      GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    },
  },
);
