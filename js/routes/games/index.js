angular.module('skyStream')
    .config(function($routeProvider) {
        $routeProvider
            .when('/games', {
                templateUrl: 'js/routes/games/template.html',
                controller: 'getGamesController',
                resolve: {
                    check: function($location, userService) {
                        var user = userService.isLoggedIn();
                        if (user) {
                            $location.path('/games')
                        } else {
                            $location.path('/')
                        }
                    }
                }
            })
    })