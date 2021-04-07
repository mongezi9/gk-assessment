const {idSelector, xpathSelector} = require('./../../custom-commands/shared/locateStrategies');
module.exports = {
  url: 'https://www.saucedemo.com/',
  commands: [{
    
    attemptLogin(strUsername, strPassword) {
      return this
        .waitForElementVisible('@username')
        .setValue('@username',strUsername)
        .clearValue('@password')
        .setValue('@password', strPassword)
        .click('@btnLogin')
    }
  }],

  elements: {
    username: xpathSelector('//*[@id="user-name"]'),
    password: xpathSelector('//*[@id="password"]'),
    btnLogin: xpathSelector('//*[@id="login-button"]')
  }
};
