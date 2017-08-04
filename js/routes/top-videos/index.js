angular.module('skyStream')
    .config(function($routeProvider) {
        $routeProvider
            .when('/top-videos', {
                templateUrl: 'js/routes/top-videos/template.html',
                controller: 'getTopVideosController',
                resolve: {
                    check: function($location, userService) {
                        var user = userService.retrieve();
                        if (user) {
                            $location.path('/top-videos')
                        } else {
                            $location.path('/')
                        }
                    }
                }
            })
    })