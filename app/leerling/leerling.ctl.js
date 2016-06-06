'use strict';

angular
    .module('leerling')
    .controller('LeerlingCtrl', ['leerlingSvc',
  function (leerlingSvc) {

    var vm = this;
    vm.leerling = new Leerling();

    vm.leerlingen = leerlingSvc.findAll();

    vm.insert = function () {
      leerlingSvc.insert(angular.copy(vm.leerling));
      vm.leerling = new Leerling();
    };

    vm.update = function (id) {
      leerlingSvc.update(id);
    };

    vm.remove = function (id) {
      leerlingSvc.remove(id);
    };
  }
]);