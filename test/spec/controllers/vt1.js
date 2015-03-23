'use strict';

describe('Controller: Vt1Ctrl', function () {

  // load the controller's module
  beforeEach(module('basicoangularApp'));

  var Vt1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Vt1Ctrl = $controller('Vt1Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
