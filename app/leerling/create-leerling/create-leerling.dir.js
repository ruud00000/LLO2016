angular
    .module('create-leerling')
    .directive("createLeerling", function () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      leerling: '=',
      "insert": '&onSubmit'
    },
    templateUrl: 'leerling/create-leerling/create-leerling.tpl.html'
  };
});