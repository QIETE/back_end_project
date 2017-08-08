angular.module('skyStream')
    .config(function($routeProvider) {
        $routeProvider
            .when('/streams', {
                templateUrl: 'js/routes/streams/template.html',
    			controller: 'getStreamsController',
                resolve: {
                    check: function($location, userService) {
                        if (userService.isLoggedIn()) {
                            $location.path('/streams')
                        } else {
                            $location.path('/')
                        }
                    }
                }
            })
    })