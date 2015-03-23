'use strict';

/**
 * @ngdoc function
 * @name basicoangularApp.controller:Vt5Ctrl
 * @description
 * # Vt5Ctrl
 * Controller of the basicoangularApp
 */
 var aplicacion = angular.module('basicoangularApp');

aplicacion.factory('factory',function(){
    return {mensaje:'saludo desde la fabrica'};
});

aplicacion.controller('Vt6Ctrl', function ($scope, factory) {
    $scope.dato = factory;    
});
