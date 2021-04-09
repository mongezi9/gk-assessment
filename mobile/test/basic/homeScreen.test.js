const HomeScreen = require('../../helpers/homeScreen');

const webdriverio = require('webdriverio');
const androidOptions = require('../../helpers/caps').androidOptions;
const app = require('../../helpers/apps').androidAimp;

androidOptions.capabilities.app = app;

describe('Home Screen Suite', function () {
  let client;

  before(async function () {
    client = await webdriverio.remote(androidOptions);
  });

  it('test navigating to Sound Effect activty', async function () {

    await HomeScreen(client).selectOption('Sound Effect');
    console.log(`Sound Effect ---> ${await client.getCurrentActivity()}`);
    /*TODO: the assertions in this case I was attempting to assert different 
       activities/fragments within an activity unfortunitely there are some limitation 
       with appium as it is a Black Box testing (heirarchy of this app has no ID's, which is becomes slow when using xpath) 
     */
    await HomeScreen(client).validateCurrentActivity('.views.MainActivity.MainActivity');
    await client.back();

  });
  it('test navigating to Sleep Timer activty', async function () {

    await HomeScreen(client).selectOption('Sleep Timer');
    console.log(`Sleep Timer ---> ${await client.getCurrentActivity()}`);
     /*TODO: the assertions in this case I was attempting to assert different 
       activities/fragments within an activity unfortunitely there are some limitation 
       with appium as it is a Black Box testing (heirarchy of this app has no ID's, which is becomes slow when using xpath) 
     */
    await HomeScreen(client).validateCurrentActivity('.views.MainActivity.MainActivity');
    await client.back();

  });
  it('test navigating to Bookmarks activity', async function () {

    await HomeScreen(client).selectOption('Bookmarks');
    console.log(`Bookmarks ---> ${await client.getCurrentActivity()}`);
     /*TODO: the assertions in this case I was attempting to assert different 
       activities/fragments within an activity unfortunitely there are some limitation 
       with appium as it is a Black Box testing (heirarchy of this app has no ID's, which is becomes slow when using xpath) 
     */
    await HomeScreen(client).validateCurrentActivity('.views.MainActivity.MainActivity');
    await client.back();

  });
  it('test navigating to Favorites activity', async function () {

    await HomeScreen(client).selectOption('Favorites');
    console.log(`Favorites ---> ${await client.getCurrentActivity()}`);
     /*TODO: the assertions in this case I was attempting to assert different 
       activities/fragments within an activity unfortunitely there are some limitation 
       with appium as it is a Black Box testing (heirarchy of this app has no ID's, which is becomes slow when using xpath) 
     */
    await HomeScreen(client).validateCurrentActivity('.views.MainActivity.MainActivity');
    await client.back();

  });
  it('test navigating to Queue activity', async function () {

    await HomeScreen(client).selectOption('Queue');
    console.log(`Queue ---> ${await client.getCurrentActivity()}`);
     /*TODO: the assertions in this case I was attempting to assert different 
       activities/fragments within an activity unfortunitely there are some limitation 
       with appium as it is a Black Box testing (heirarchy of this app has no ID's, which is becomes slow when using xpath) 
     */
    await HomeScreen(client).validateCurrentActivity('.views.MainActivity.MainActivity');
    await client.back();

  });

  after(async function () {
    await client.deleteSession();
  });
});
