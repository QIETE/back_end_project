angular.module('skyStream')
    .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'js/routes/home/template.html',
                controller: 'searchController',
                resolve: {
                    check: function($location) {
                        if ('Your Condition') {
                            //Do something
                        } else {
                            $location.path('/'); //redirect user to home.
                            alert("You don't have access here");
                        }
                    }
                }
            })
    })