angular.module('skyStream')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/myThings', {
              templateUrl: 'js/routes/myThings/template.html',
              controller: 'myThingsController'

            })
    })
