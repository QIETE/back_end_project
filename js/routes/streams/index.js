angular.module('skyStream')
    .config(function($routeProvider) {
        $routeProvider
            .when('/streams', {
                templateUrl: 'js/routes/streams/template.html',
    			controller: 'getStreamsController',
                resolve: {
                    check: function($location, userService) {
                        var user = userService.retrieve();
                        if (user) {
                            $location.path('/streams')
                        } else {
                            $location.path('/')
                        }
                    }
                }
            })
    })