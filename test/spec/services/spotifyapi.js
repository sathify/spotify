'use strict';

describe('Service: spotifyApi', function () {

  // load the service's module
  beforeEach(module('spotifyAppApp'));

  // instantiate service
  var spotifyApi;
  beforeEach(inject(function (_spotifyApi_) {
    spotifyApi = _spotifyApi_;
  }));

  it('should do something', function () {
    expect(!!spotifyApi).toBe(true);
  });

});
