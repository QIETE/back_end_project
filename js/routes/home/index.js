angular.module('skyStream')
    .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'js/routes/home/template.html',
                controller: 'searchController',
                resolve: {
                    check: function($location, userService) {
                        var user = userService.retrieve();
                        if (user) {
                            $location.path('/home')
                        } else {
                            $location.path('/')
                        }
                    }
                }
            })
    })