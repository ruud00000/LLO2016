'use strict';

angular
    .module('opmerking')
    .controller('OpmerkingCtrl', ['$scope', 'opmerkingSvc', 'leerlingSvc',
  function ($scope, opmerkingSvc, leerlingSvc) {

    var vm = this;
    vm.currentLeerling = null;

    vm.opmerking = new Opmerking();
    vm.leerlingen = leerlingSvc.findAll();

    vm.insertAndAddReferenceToLeerling = function () {
      opmerkingSvc.insertAndAddReferenceToLeerling(angular.copy(vm.opmerking));
      vm.opmerking = new Opmerking();
    };

    $scope.$watch(function () {
      return vm.currentLeerling;
    }, function () {
      leerlingSvc.setCurrentLeerling(vm.currentLeerling);

      if (vm.currentLeerling) {
        vm.opmerkingen = leerlingSvc.getOpmerkingenForCurrentLeerling();
        vm.opmerkingen.$loaded().then(function (data) {
          console.log('apt count: ' + data.length);
        });
      }
    });
  }
]);