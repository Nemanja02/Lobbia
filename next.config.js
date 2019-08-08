const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withSass({
    cssModules: true,
    webpack(config, options) {
      config.node = {
        fs: "empty"
      }
      return config;
    }
  })
);
