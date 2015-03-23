'use strict';

/**
 * @ngdoc function
 * @name basicoangularApp.controller:Vt2Ctrl
 * @description
 * # Vt2Ctrl
 * Controller of the basicoangularApp
 */
angular.module('basicoangularApp')
  .controller('Vt3Ctrl', function ($scope) {
    $scope.tareas = [
        {texto: 'Estudiar', hecho:true},
        {texto: 'Rendir', hecho:true},
        {texto: 'Salir', hecho:false},
    ];
    $scope.agregarTarea= function(){
        $scope.tareas.push({texto: $scope.txtnuevaTarea, hecho:false});
        $scope.txtnuevaTarea= '';
        };
    $scope.restantes=function (){
        var cuenta=0;
        angular.forEach($scope.tareas, function(tarea) {
                                                cuenta+= tarea.hecho ? 0 : 1;
                                                });
        return cuenta;
        };
    $scope.eliminarTarea= function(){
        var tareasViejas= $scope.tareas;
        $scope.tareas=[];
        angular.forEach(tareasViejas, function(tarea){
                                                    if(!tarea.hecho) {$scope.tareas.push(tarea);}
                                                    });
        };
  });
