'use strict';

/**
 * @ngdoc function
 * @name spotifyAppApp.controller:ArtistCtrl
 * @description
 * # ArtistCtrl
 * Controller of the spotifyAppApp
 */
angular.module('spotifyAppApp')
  .controller('ArtistCtrl', function ($scope, $routeParams, spotifyApi, $location) {
    $scope.topTracks = [];

    var artist = $routeParams.id;

    function getArtistTopTracks (artist) {
      $scope.isGettingResults = true; 

      spotifyApi.getArtistTopTracks(artist, 'US')
        .then(function (results) {
          $scope.topTracks = results.tracks; 
        })
        .catch(function (err) {
          //show error states
          console.log(err);
        })
        .finally(function () {
          $scope.isGettingResults = false; 
        });
    }

    function getRelatedArtists (artist) {
 	  $scope.isGettingRelated = true;
      spotifyApi.getRelatedArtists(artist)
        .then(function (results) {
          $scope.related = results.artists; 
        })
        .catch(function (err) {
          //show error states
          console.log(err);
        })
        .finally(function () {
          $scope.isGettingRelated = false; 
        });
    }

    $scope.getArtistPage = function (artist) {
      $location.path('/artist/' + artist);
    };

    getArtistTopTracks(artist);
    getRelatedArtists(artist);
  });
