angular.module('skyStream')
    .controller('loginController', function ($scope, $rootScope, $location, userService) {
      $rootScope.auth = true

      $scope.login = function () {
        var username = $scope.username
        var password = $scope.password

        userService.login(username, password, function (result) {
                if (result.status === 'LOGIN_SUCCEEDED') {
                    $location.path('/home')

                    $scope.$apply()
                }
        })
      }
    })
