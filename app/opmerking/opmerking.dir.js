app.directive('opmerking', ['FIREBASE_URI', '$firebaseObject', 'opmerkingSvc',
  function (FIREBASE_URI, $firebaseObject, opmerkingSvc) {

    var linker = function (scope, element, attrs) {
      scope.opmerkingRef = attrs['opmerkingRef'];
      scope.myOpmerking = $firebaseObject(new Firebase(FIREBASE_URI + 'opmerkingen/' + scope.opmerkingRef));
    };

    var controller = function ($scope) {
      $scope.updateItem = function () {
        $scope.myOpmerking.$save();
      };

      $scope.removeItem = function () {
        opmerkingSvc.removeAndRemoveReferenceFromLeerling($scope.opmerkingRef);
      };
    };

    return {
      scope: true,
      link: linker,
      controller: controller
    };
  }]);