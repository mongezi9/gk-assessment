let data = require('./../../lib/test-data/webTestingData')
let {
     standard_user, 
     locked_out_user,
     performance_glitch_user,
     problem_user
  } =  data.acceptedUserloginData.user;
let password = data.acceptedUserloginData.pass;

module.exports = {
  '@disabled':false,
  '@tags': ['endToEndSuite'],
  'test standard user is granted access' (client) { 
    const loginPage = client.page.login();
    
    loginPage
      .navigate()
      .attemptLogin(standard_user, password);
   },
   'as a user I can add item to cart' (client) { 
    const inventoryPage = client.page.inventory();
   
    inventoryPage
      .navigate()
      .addToCart();
   },
   'as a user I can checkout existing items on cart' (client) { 
    const cartPage = client.page.cart();
   
    cartPage
      .navigate()
      .checkout();
   },
   'as a user I can checkout existing items on cart' (client) { 
    const cartPage = client.page.cart();
   
    cartPage
      .navigate()
      .checkout();
   },
   'as a user I can able to enter shipping details'(client) {
    const checkoutPage = client.page.checkout();
   
    checkoutPage
      .navigate()
      .enterCheckoutInfo('Mongz', 'Mthimunye', '1234')
      .continue()
   },
   'as a user I need to ensure I am checking out correct item'(client){
    const checkoutOverviewPage = client.page.checkoutOverview();
   
    checkoutOverviewPage
      .navigate()
      .overviewValidation('Sauce Labs Backpack', "$29.99")
      .finish()
   },

  after(client) {
    client.end();
  }
};
