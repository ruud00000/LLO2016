'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('LLO 2016', function() {

  describe('edit-leerling', function() {

    beforeEach(function() {
      browser.get('index.html#/leerlingen');
    });

    it('should filter the leerlingen list as a user types into the search box', function() {
      // var editLeerling = $$('tr[ng-repeat*="(id, leerling) in leerlingen"]');

      var EC = protractor.ExpectedConditions;
      var elm = element(by.repeater('(id, leerling) in leerlingen'));

      browser.wait(EC.presenceOf(elm), 5000);


      var editLeerling = element.all(by.repeater('(id, leerling) in leerlingen'));
      var query = element(by.model('mentorQuery'));

      expect(editLeerling.count()).toBe(248);

      query.sendKeys('5H');
      expect(editLeerling.count()).toBe(163);

      query.clear();
      query.sendKeys('6V');
      expect(editLeerling.count()).toBe(85);

      query.clear();
      query.sendKeys('WIND');
      expect(editLeerling.count()).toBe(22);
    });

  });

});
