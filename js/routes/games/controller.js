angular.module('skyStream')
.controller('getGamesController', function ($scope, $rootScope, DataService) {
  $rootScope.auth = true
  $scope.section = 'TOP GAMES'
  DataService.getGames()
  .then(function (oData) {
    $scope.gamesImgs = oData.data.top
    console.log(oData)
  })

  $scope.like = function (contentId) {
    return userService.like('games', contentId)
  }

  $scope.dislike = function (contentId) {
    return userService.dislike('games', contentId)
  }

  $scope.showId = function showId (contentId) {
    alert(contentId)
  }
})
