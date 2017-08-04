angular.module('skyStream')
    .controller('navController', function($scope, userService) {
        $scope.isUserLoggedIn = function() {
        	return !!userService.retrieve();
        }
    })