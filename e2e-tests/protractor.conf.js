//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }/*,

  onPrepare: function() {
    browser.driver.get('index.html');

    // browser.driver.findElement(by.id('username')).sendKeys('Jane');
    // browser.driver.findElement(by.id('password')).sendKeys('1234');
    browser.driver.findElement(by.id('hier')).click();

    // Login takes some time, so wait until it's done.
    // For the test app's login, we know it's done when it redirects to
    // index.html.
    return browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return /index/.test(url);
      });
    }, 10000);
  }*/

};
