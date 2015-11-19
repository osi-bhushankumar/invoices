'use strict';

/**
 * @ngdoc overview
 * @name invoiceApp
 * @description
 * # invoice
 *
 * Main module of the application.
 */
angular
  .module('invoiceApp', [
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
        templateUrl: 'views/main/main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
