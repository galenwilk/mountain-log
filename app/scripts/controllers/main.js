'use strict';

/**
 * @ngdoc function
 * @name mountainLogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mountainLogApp
 */
angular.module('mountainLogApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
