angular.module('skyStream')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/myAccount', {
              templateUrl: 'js/routes/myAccount/template.html',
              controller: 'myAccountController'

            })
    })
