'use strict';

/**
 * @ngdoc function
 * @name basicoangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the basicoangularApp
 */
angular.module('basicoangularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
