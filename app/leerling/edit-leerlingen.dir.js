app.directive("editLeerlingen", function () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      leerlingen: '=',
      "update": '&onEdit',
      "remove": '&onDelete'
    },
    templateUrl: 'leerling/edit-leerling.tpl.html'
  };
});
