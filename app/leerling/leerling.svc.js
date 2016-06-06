'use strict';

angular
    .module('leerling')
    .service('leerlingSvc', ['FIREBASE_URI', '$firebaseArray',
  function (FIREBASE_URI, $firebaseArray) {

    var leerlingenUri = FIREBASE_URI + 'leerlingen';
    var leerlingenRef = new Firebase(leerlingenUri);
    var leerlingen = $firebaseArray(leerlingenRef);

    var currentLeerling = null;

    var findAll = function () {
      return leerlingen;
    };

    var setCurrentLeerling = function (leerling) {
      currentLeerling = leerling;
    };

    var getOpmerkingenForCurrentLeerling = function () {
      var opmerkingenRef = leerlingenRef.child(currentLeerling + '/opmerkingen');
      return $firebaseArray(opmerkingenRef);
    };

    var addOpmerkingForCurrentLeerling = function (opmerkingRef) {
      var child = leerlingenRef.child(currentLeerling + '/opmerkingen/' + opmerkingRef.key());
      child.set(true);
    };

    var removeOpmerkingForCurrentLeerling = function (opmerkingRef) {
      var child = leerlingenRef.child(currentLeerling + '/opmerkingen/' + opmerkingRef);
      child.remove();
    };

    var insert = function (item) {
      leerlingen.$add(item);
    };

    var update = function (id) {
      leerlingen.$save(id);
    };

    var remove = function (id) {
      leerlingen.$remove(id);
    };

    return {
      findAll: findAll,
      insert: insert,
      update: update,
      remove: remove,
      setCurrentLeerling: setCurrentLeerling,
      addOpmerkingForCurrentLeerling: addOpmerkingForCurrentLeerling,
      removeOpmerkingForCurrentLeerling: removeOpmerkingForCurrentLeerling,
      getOpmerkingenForCurrentLeerling: getOpmerkingenForCurrentLeerling
    }
  }]);