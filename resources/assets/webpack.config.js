const { getConfig } = require('@craftcms/webpack');

module.exports = getConfig({
  type: 'vue',
  context: __dirname,
  config: {
    entry: {
      'recurring-dates': './recurring-dates.js',
    },
  },
});
