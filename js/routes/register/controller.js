angular.module('skyStream')
    .controller('registerController', function ($scope, $rootScope, userService) {
      $rootScope.auth = true

      $scope.register = function () {
        var user = {
          name: $scope.name,
          surname: $scope.surname,
          age: $scope.age,
          username: $scope.username,
          password: $scope.password,
          country: $scope.country,
          email: $scope.email
        }

        userService.register(user, function (result) {
          $scope.registered = result.status === 'REGISTER_SUCCEEDED'
          $scope.alreadyRegistered = result.status === 'ALREADY_REGISTERED'
          
          $scope.$apply()
        })
      }
    })
