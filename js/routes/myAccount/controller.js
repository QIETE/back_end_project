angular.module('skyStream')

    .controller('myAccountController', function ($scope, $rootScope, $location, userService) {
      $rootScope.auth = true
      $scope.name = userService.retrieve().name
      $scope.surname = userService.retrieve().surname
      $scope.username = userService.retrieve().username
      $scope.password = userService.retrieve().password
      $scope.email = userService.retrieve().email
      $scope.age = userService.retrieve().age
      $scope.country = userService.retrieve().country
    })
