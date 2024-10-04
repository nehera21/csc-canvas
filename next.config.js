// next.config.js

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/portfolio_website/' : '',
  basePath: isProd ? '/portfolio_website' : '',
};