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
  '@tags': ['loginSuite'],
  'test standard user is granted access' (client) { 
    const loginPage = client.page.login();
    
    loginPage
      .navigate()
      .attemptLogin(standard_user, password);
   },
   'test locked out user' (client) { 
    const loginPage = client.page.login();
   
    loginPage
      .navigate()
      .attemptLogin(locked_out_user, password);
   },
   'test performance glitch user' (client) { 
    const loginPage = client.page.login();
   
    loginPage
      .navigate()
      .attemptLogin(performance_glitch_user, password);
   },
   'test problem user' (client) { 
    const loginPage = client.page.login();
   
    loginPage
      .navigate()
      .attemptLogin(problem_user, password);
   },

  after(client) {
    client.end();
  }
};
