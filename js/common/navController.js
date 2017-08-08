angular.module('skyStream')
    .controller('navController', function ($scope, $location, userService) {
        $scope.isUserLoggedIn = function() {
            return userService.isLoggedIn()
        }

        $scope.logout = function () {
            userService.logout()

            $location.path('/')
        }
    })
