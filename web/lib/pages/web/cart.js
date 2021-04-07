const {idSelector, xpathSelector} = require('./../../custom-commands/shared/locateStrategies');
module.exports = {
  url: 'https://www.saucedemo.com/cart.html',
  commands: [{
    
    checkout() {
      return this
        .waitForElementVisible('@checkout')
        .click('@checkout')
    },
    validateCartItems(){
      //TODO: more assertions need to go here
    }
  }],

  elements: {
    checkout: idSelector('checkout'),
    continueShopping: xpathSelector('continue-shopping')
  }
};
