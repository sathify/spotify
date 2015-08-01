'use strict';

/**
 * @ngdoc function
 * @name spotifyAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spotifyAppApp
 */
angular.module('spotifyAppApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.query = null;

    $scope.search = function () {
			$location.path('/search/' + $scope.query);
    };

  });
