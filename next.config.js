const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
  assetPrefix: !debug ? 'https://sbacic.github.io/react-wizard-demo/' : '',
};
