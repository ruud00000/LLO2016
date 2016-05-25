'use strict';

var app = angular.module('firebaseApp', [
  'ngRoute',
  'firebase'
]);

// this is the Firebase URL we'll be talking to
// in case of your Firebase account, please modify
// the below URL appropriately
app.constant('FIREBASE_URI', 'https://leerlingopmerkingapp.firebaseio.com/');

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'main/main.tpl.html',
      controller: 'MainCtrl as mainCtrl'
    })
    .when('/leerlingen', {
      templateUrl: 'leerling/leerling-view.tpl.html',
      controller: 'LeerlingCtrl as leerlingCtrl'
    })
    .when('/opmerkingen', {
      templateUrl: 'opmerking/opmerking.tpl.html',
      controller: 'OpmerkingCtrl as opmerkingCtrl'
    })
    .when('/factsvc', {
      templateUrl: 'fact-svc/factSvc.tpl.html',
      controller: 'MyCtrl as myCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
