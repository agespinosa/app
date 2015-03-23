'use strict';

/**
 * @ngdoc overview
 * @name basicoangularApp
 * @description
 * # basicoangularApp
 *
 * Main module of the application.
 */
angular
  .module('basicoangularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/vt1', {
        templateUrl: 'views/vt1.html',
        controller: 'Vt1Ctrl'
      })
      .when('/vt2', {
        templateUrl: 'views/vt2.html',
        controller: 'Vt2Ctrl'
      })
      .when('/vt3', {
        templateUrl: 'views/vt3.html',
        controller: 'Vt3Ctrl'
      })
      .when('/vt4', {
        templateUrl: 'views/vt4.html',
        controller: 'Vt4Ctrl'
      })
      .when('/vt5', {
        templateUrl: 'views/vt5.html',
        controller: 'ControladorUno'
      })
      .when('/vt6', {
        templateUrl: 'views/vt6.html',
        controller: 'Vt6Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
