angular.module('skyStream')

    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'js/routes/login/template.html',
                controller: 'loginController',
                resolve: {
                    check: function ($location, userService) {
                        if (userService.isLoggedIn()) {
                            $location.path('/home')
                        } else {
                            $location.path('/')
                        }
                    }
                }
            })
    })
