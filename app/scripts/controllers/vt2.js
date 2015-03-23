'use strict';

/**
 * @ngdoc function
 * @name basicoangularApp.controller:Vt2Ctrl
 * @description
 * # Vt2Ctrl
 * Controller of the basicoangularApp
 */
angular.module('basicoangularApp')
  .controller('Vt2Ctrl', function ($scope) {
    $scope.tareas = [
        {texto: 'Estudiar', hecho:true},
        {texto: 'Rendir', hecho:true},
        {texto: 'Salir', hecho:false},
    ];
  });
