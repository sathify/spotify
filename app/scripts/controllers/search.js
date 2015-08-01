'use strict';

/**
 * @ngdoc function
 * @name spotifyAppApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the spotifyAppApp
 */
angular.module('spotifyAppApp')
  .controller('SearchCtrl', function ($scope, $routeParams, spotifyApi, $location) {
    
  	$scope.searchQuery = $routeParams.query;

    $scope.results = [];
    $scope.placeHold = 'http://placehold.it/200x200';

    function getResults (searchQuery) {
      $scope.isGettingResults = true; 

      spotifyApi.search(searchQuery, 'artist')
        .then(function (results) {
          $scope.results = results.artists.items; 
        })
        .catch(function (err) {
          //show error states
          console.log(err);
        })
        .finally(function () {
          $scope.isGettingResults = false; 
        });
    }

    getResults($scope.searchQuery);

    $scope.getArtistPage = function (artist) {
      $location.path('/artist/' + artist);
    };

  });
