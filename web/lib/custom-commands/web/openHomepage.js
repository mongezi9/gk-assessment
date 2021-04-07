module.exports = {
  command: async function () {
    this.url('https://www.saucedemo.com/');
    this.waitForElementVisible('section#index-container');

    const result = await this.elements('css selector', '#index-container ul.features li');
    this.assert.strictEqual(result.value.length, 7, 'Feature elements number is correct');
  }
};
