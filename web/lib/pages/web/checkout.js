const {idSelector, xpathSelector} = require('./../../custom-commands/shared/locateStrategies');
module.exports = {
  url: 'https://www.saucedemo.com/checkout-step-one.html',
  commands: [{
    
    enterCheckoutInfo(firstname, lastname, zipCode) {
      return this
        .waitForElementVisible('@txtFirstname')
        .clearValue('@txtFirstname')
        .setValue('@txtFirstname', firstname)
        .clearValue('@txtLastname')
        .setValue('@txtLastname', lastname)
        .clearValue('@txtZipCode')
        .setValue('@txtZipCode', zipCode)
        
    },
    continue(){
      return this
        .click('@continue');
    },
    validateCartItems(){
            
    }
  }],

  elements: {
    txtFirstname: idSelector('first-name'),
    txtLastname: idSelector('last-name'),
    txtZipCode: idSelector('postal-code'),
    continue: idSelector('continue')
  }
};
