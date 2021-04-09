const assert = require('chai').assert;

const SELECTORS = {
    ANDROID: {
        'menu': '(*//com.aimp.skinengine.controls.SkinnedButton)[1]',
        'Home': '(*//android.view.ViewGroup/android.view.View)[1]',
        'Sound Effect': '(*//android.view.ViewGroup/android.view.View)[2]',
        'Sleep Timer': '(*//android.view.ViewGroup/android.view.View)[3]',
        'Bookmarks': '(*//android.view.ViewGroup/android.view.View)[4]',
        'Favorites': '(*//android.view.ViewGroup/android.view.View)[5]',
        'Queue': '(*//android.view.ViewGroup/android.view.View)[6]',
        'Default': '(*//android.view.ViewGroup/android.view.View)[7]',
        'navScreen': '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
    }
};
const globalTimeout = 60000;

 function HomeScreen(client) {
    return {
        async selectOption(option) {
            const buttonMenu = await client.$(SELECTORS.ANDROID.menu);

            buttonMenu.waitForDisplayed(3000);
            buttonMenu.click();

            const buttonOption = await client.$(SELECTORS.ANDROID[`${option}`]);
            buttonOption.waitForDisplayed(3000);
            buttonOption.click();

            const nextScreen = await client.$(SELECTORS.ANDROID.navScreen);
            nextScreen.waitForDisplayed(7000);

        },
        async validateCurrentActivity(expectActivity){
            const current_activity = await client.getCurrentActivity();
            
            assert.equal(current_activity, expectActivity);
        }
    }
}

module.exports = HomeScreen;