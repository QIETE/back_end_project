angular.module('skyStream')
    .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'js/routes/home/template.html',
                controller: 'searchController',
                resolve: {
                    check: function($location, userService) {
                        if (userService.isLoggedIn()) {
                            $location.path('/home')
                        } else {
                            $location.path('/')
                        }
                    }
                }
            })
    })