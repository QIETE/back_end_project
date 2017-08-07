angular.module('skyStream')
.controller('getGamesController', function ($scope, $rootScope, DataService) {
  $rootScope.auth = true
  $scope.section = 'TOP GAMES'
  DataService.getGames()
  .then(function (oData) {
    $scope.gamesImgs = oData.data.top
    console.log(oData)
  })

  $scope.like = function () {
    return userFirebaseService.like()
  }

  $scope.dislike = function () {
    return userFirebaseService.dislike()
  }
})
