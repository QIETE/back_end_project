angular.module('skyStream')
    .controller('navController', function ($scope, userService) {
      $scope.isUserLoggedIn = function () {
        return !!userService.retrieve()
      }

      $scope.logout = function () {
      	return userService.logout()
      	console.log('hola mundo')
      }
    })
