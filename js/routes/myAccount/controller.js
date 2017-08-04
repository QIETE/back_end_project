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

      $scope.update = function () {
        var user = {
          name: $scope.name,
          surname: $scope.surname,
          age: $scope.age,
          username: $scope.username,
          password: $scope.password,
          country: $scope.country,
          email: $scope.email
        }

        userService.update(user, function (result) {
          $scope.updated = result.status === 'UPDATE_SUCCEEDED'
          $scope.notupdated = result.status === 'ALREADY_UPDATED'

          $scope.$apply()
        })
      }
    })