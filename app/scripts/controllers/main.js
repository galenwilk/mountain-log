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
    $scope.entries = [
      {
        date: '2014-04-05',
        location: 'Vail, CO',
        id: '100'
      },
      {
        date: '2014-01-26',
        location: 'Lake Tahoe, NV',
        id: '101'
      }
    ];
  });
