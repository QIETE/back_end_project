angular.module('skyStream')
.controller('getGamesController', function ($scope, $rootScope, DataService) {
  $rootScope.auth = true
  $scope.section = 'TOP GAMES'
  DataService.getGames()
  .then(function (oData) {
    $scope.gamesImgs = oData.data.top
    console.log(oData)
  })
})
