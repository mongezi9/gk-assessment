const {idSelector, xpathSelector} = require('./../../custom-commands/shared/locateStrategies');
module.exports = {
  url: 'https://www.saucedemo.com/inventory.html',
  commands: [{
    
    addToCart() {
      return this
        .waitForElementVisible('@btnAddToCart')
        .click('@btnAddToCart')
    }
  }],

  elements: {
    btnAddToCart: xpathSelector('(//*[text()="Add to cart"])[1]')
  }
};
