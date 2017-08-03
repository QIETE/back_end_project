angular.module('skyStream')

.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'js/routes/login/template.html',
    controller: 'loginController'
  })
})
