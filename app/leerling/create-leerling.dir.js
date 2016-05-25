app.directive("createLeerling", function () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      leerling: '=',
      "insert": '&onSubmit'
    },
    templateUrl: 'leerling/create-leerling.tpl.html'
  };
});