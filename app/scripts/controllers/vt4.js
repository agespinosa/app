'use strict';

/**
 * @ngdoc function
 * @name basicoangularApp.controller:Vt4Ctrl
 * @description
 * # Vt4Ctrl
 * Controller of the basicoangularApp
 */
angular.module('basicoangularApp')
  .controller('Vt4Ctrl', function ($scope) {
    $scope.clientes = [
	{codigo:'1',razonSocial:'Marta', direccion:'Callejon Funes 10980', telefono:'0342-4592354',saldo:'135.85',dia: new Date()},
	{codigo:'2',razonSocial:'Fiambreria Ilusion',direccion:'Francia 3100',telefono:'0342-4520981',saldo:'245.00',dia: new Date()},
	{codigo:'3',razonSocial:'El Rafa',direccion:'cochabamba 1589',telefono:'0342-4589654',saldo:'0',dia: new Date()},
	{codigo:'4',razonSocial:'Elias',direccion:'Pte Pero 1256',telefono:'0342-4586235',saldo:'1009.50',dia: new Date()},
	{codigo:'5',razonSocial:'Jara',direccion:'J D Solis 2953',telefono:'0342-4589632',saldo:'0.00',dia: new Date()},
	{codigo:'6',razonSocial:'Rey del queso',direccion:'Avellaneda 3541',telefono:'0342-4512365',saldo:'890.4',dia: new Date()},
	{codigo:'7',razonSocial:'Ministerio',direccion:'Bv Pellegrini 3100',telefono:'0342-4536582', saldo:'10000.85',dia: new Date()}
	];
    
    $scope.ordenarPor= function(orden){
        $scope.ordenSeleccionado= orden;
    };
  });
