'use strict';

describe('Controller: Vt6Ctrl', function () {

  // load the controller's module
  beforeEach(module('basicoangularApp'));

  var Vt6Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Vt6Ctrl = $controller('Vt6Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
