// Declare app level module which depends on views, and core components
'use strict';
 
angular.module('studentApp', [
  'ngRoute',
  'studentApp.home'
]).
config(['$routeProvider', function($routeProvider) {
     // Routes will be here
     $routeProvider.otherwise({
      redirectTo: '/home'
  });
}]);
