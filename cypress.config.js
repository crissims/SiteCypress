const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1950,
  viewportHeight: 1000,

  e2e: {
    setupNodeEvents(on, config) {

    },
  },
});
