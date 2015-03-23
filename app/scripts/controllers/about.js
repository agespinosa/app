'use strict';

/**
 * @ngdoc function
 * @name basicoangularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the basicoangularApp
 */
angular.module('basicoangularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
