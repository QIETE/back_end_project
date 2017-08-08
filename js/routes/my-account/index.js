angular.module('skyStream')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/my-account', {
              templateUrl: 'js/routes/my-account/template.html',
              controller: 'myAccountController'

            })
    })
