angular.module('skyStream')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/my-things', {
              templateUrl: 'js/routes/my-things/template.html',
              controller: 'myThingsController'

            })
    })
