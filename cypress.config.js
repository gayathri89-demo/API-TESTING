const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://reqres.in/api",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",

    requestTimeout: 15000,
    responseTimeout: 15000,

    retries: {
      runMode: 1,
      openMode: 0
    },

    screenshotOnRunFailure: true,
    video: false
  }
});