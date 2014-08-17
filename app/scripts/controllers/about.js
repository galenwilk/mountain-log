'use strict';

/**
 * @ngdoc function
 * @name mountainLogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mountainLogApp
 */
angular.module('mountainLogApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
