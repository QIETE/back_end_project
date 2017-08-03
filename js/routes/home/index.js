angular.module('skyStream')
.config(function ($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'js/routes/home/template.html',
    controller: 'searchController'
  })
})
