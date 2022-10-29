const css = require('rollup-plugin-import-css');

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins.push(css());
    return config; // always return a config.
  },
};
