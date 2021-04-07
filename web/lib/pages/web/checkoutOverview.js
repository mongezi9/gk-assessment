const {idSelector, xpathSelector} = require('./../../custom-commands/shared/locateStrategies');
module.exports = {
  url: 'https://www.saucedemo.com/checkout-step-two.html',
  commands: [{
    
    overviewValidation(itemName, itemPrice) {
      return this
        .assert.containsText("@lblItemPrice", itemName)
        .assert.containsText("@lblItemPrice", itemPrice);
    },
    finish() {
      return this
      .click('@btnFinish')
    },
  }],

  elements: {
    lblItemName: xpathSelector('//*[@class="inventory_item_name"]'),
    lblItemPrice: xpathSelector('//*[@class="inventory_item_price"]'),
    btnFinish: idSelector('finish')
  }
};
