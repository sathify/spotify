'use strict';

/**
 * @ngdoc service
 * @name spotifyAppApp.spotifyApi
 * @description
 * # spotifyApi
 * Service in the spotifyAppApp.
 */
angular.module('spotifyAppApp')
  .service('spotifyApi', function ($http, $q) {

    function api (url, method, params, data) {
      var deferred = $q.defer();

      method = method || 'GET';

      $http({
        url: url,
        method: method,
        params: params,
        data: data
      })
      .then(function (result) {
        deferred.resolve(result.data);
      })
      .catch(function (data) {
        deferred.reject(data);
      });

      return deferred.promise;
    }

    return {

      getArtist: function (artist) {
        return api('https://api.spotify.com/v1/artists/' + artist);
      },

      search: function (q, type, options) {
        options = options || {};
        options.q = q;
        options.type = type;

        return api('https://api.spotify.com/v1/search', 'GET', options);
      },

      getArtistTopTracks: function (artist, country) {
        return api('https://api.spotify.com/v1/artists/' + artist + '/top-tracks', 'GET', {
          country: country
        });
      },

      getRelatedArtists: function (artist) {
        return api('https://api.spotify.com/v1/artists/' + artist + '/related-artists');
      }
    };
  });
