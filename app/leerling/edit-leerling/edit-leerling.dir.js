angular
    .module('edit-leerling')
    .directive("editLeerling", function () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      leerlingen: '=',
      "update": '&onEdit',
      "remove": '&onDelete'
    },
    templateUrl: 'leerling/edit-leerling/edit-leerling.tpl.html'
  };
});
