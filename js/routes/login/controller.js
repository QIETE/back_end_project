angular.module('skyStream')
    .controller('loginController', function ($scope, $rootScope, userService) {
      $rootScope.auth = true

      $scope.login = function () {
        var user = {

          username: $scope.liusername,
          password: $scope.lipassword

        }

        console.dir(user)

        userService.login(user, function (msg) {
          console.log(msg)
        })
      }
    })
