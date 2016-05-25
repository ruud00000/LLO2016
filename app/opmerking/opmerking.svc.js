'use strict';

app.service('opmerkingSvc', ['FIREBASE_URI', '$firebaseArray', 'leerlingSvc',
  function (FIREBASE_URI, $firebaseArray, leerlingSvc) {

    var opmerkingenUri = FIREBASE_URI + 'opmerkingen';
    var opmerkingenRef = new Firebase(opmerkingenUri);
    var opmerkingen = $firebaseArray(opmerkingenRef);

    var findAll = function () {
      return opmerkingen;
    };

    var insertAndAddReferenceToLeerling = function (opmerking) {
      opmerkingen.$add(opmerking).then(function (ref) {
        leerlingSvc.addOpmerkingForCurrentLeerling(ref);
      })
    };

    var removeAndRemoveReferenceFromLeerling = function (opmerkingRef) {
      var index = opmerkingen.$indexFor(opmerkingRef);
      opmerkingen.$remove(index).then(function () {
        console.log('now remove opmerking for leerling: ' + opmerkingRef);
        leerlingSvc.removeOpmerkingForCurrentLeerling(opmerkingRef);
      }, function (error) {
        console.log('Error: ' + error);
      });
    };

    return {
      findAll: findAll,
      insertAndAddReferenceToLeerling: insertAndAddReferenceToLeerling,
      removeAndRemoveReferenceFromLeerling: removeAndRemoveReferenceFromLeerling
    }
  }]);