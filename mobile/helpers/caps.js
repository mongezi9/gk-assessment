
const androidCaps = {
  platformName: 'Android',
  automationName: 'UiAutomator2',
  deviceName: 'emulator-5554',
  platformVersion: '7.1.1',
  orientation: 'PORTRAIT',
  noReset: true,
  newCommandTimeout: 240,
  app: undefined // Will be added in tests
};

const serverConfig = {
  path: '/wd/hub',
  host: 'localhost',
  port: 4723,
  logLevel: 'info'
};

const androidOptions = Object.assign(
  {
    capabilities: androidCaps
  },
  serverConfig
);


module.exports = {
  androidOptions
};
