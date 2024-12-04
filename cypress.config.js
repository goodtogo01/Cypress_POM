///<reference types="Cypress"/>
const { defineConfig } = require('Cypress');

const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  "reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "cypress/reports/mocha",
            "quite": true,
            "overwrite": false,
            "html": true,
            "json": true
        }
    },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
