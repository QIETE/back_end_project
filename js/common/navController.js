angular.module('skyStream')
    .controller('navController', function ($scope, $location, userService) {
        $scope.isUserLoggedIn = function () {
            return userService.isLoggedIn()
        }

        $scope.logout = function () {
            if (confirm('Are you sure you want to logout?')) {
                userService.logout()

                $location.path('/')
            }
        }
    })
