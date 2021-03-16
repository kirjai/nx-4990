// const { nextI18NextRewrites } = require('next-i18next/rewrites');
const localeSubpaths = {};
const withNx = require('@nrwl/next/plugins/with-nx');

console.log('ENV', process.env.PUSHER_CLIENT_KEY, process.env);

module.exports = withNx({
  // rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    PUSHER_CLIENT_KEY: process.env.PUSHER_CLIENT_KEY,
    API_URL: process.env.NX_SERVERLESS ? 'my-api-url' : process.env.API_URL,
  },
  images: {
    domains: ['localhost', 'mys3url.amazonaws.com'],
  },
});
