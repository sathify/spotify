'use strict';

/**
 * @ngdoc overview
 * @name spotifyAppApp
 * @description
 * # spotifyAppApp
 *
 * Main module of the application.
 */
angular
  .module('spotifyAppApp', [
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
      .when('/artist/:id', {
        templateUrl: 'views/artist.html',
        controller: 'ArtistCtrl'
      })
      .when('/search/:query', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
