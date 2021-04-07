const chromedriver = require('chromedriver');

module.exports = {
  src_folders: [
    'test/web'
  ],
  page_objects_path : 'lib/pages/web',
  custom_commands_path : 'lib/custom-commands/web',
  custom_assertions_path : 'lib/custom-assertions/web',

  webdriver: {
    start_process: true,
    port: 4444,
    server_path: 'node_modules/.bin/geckodriver',
    cli_args: [
    ]
  },

  test_settings: {
    default: {
      desiredCapabilities : {
        browserName : 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true
        }
      },

      launch_url: 'https://www.saucedemo.com/',

      globals: {
        // NIGHTWATCH_VERSION is defined as an environment variable (.env files are supported also)
        nightwatchVersion: '${NIGHTWATCH_VERSION}',
        waitForConditionTimeout: 30000,
        abortOnAssertionFailure: false,
        customReporterCallbackTimeout: 10000,
        throwOnMultipleElementsReturned: false,
        waitForConditionPollInterval: 3000,
        retryAssertionTimeout: 10000,
        asyncHookTimeout: 60000
      }
    },

    safari: {
      desiredCapabilities : {
        browserName : 'safari',
        alwaysMatch: {
          acceptInsecureCerts: false
        }
      },
      webdriver: {
        port: 4445,
        server_path: '/usr/bin/safaridriver'
      }
    },

    chrome: {
      desiredCapabilities : {
        browserName : 'chrome',
        chromeOptions: {
          w3c: false
        }
      },

      webdriver: {
        port: 9515,
        server_path: chromedriver.path
      }
    }
  }
};
