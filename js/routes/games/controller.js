angular.module('skyStream')
    .controller('getGamesController', function ($scope, $rootScope, DataService, userService) {
      $rootScope.auth = true
      $scope.section = 'TOP GAMES'
      DataService.getGames()
            .then(function (oData) {
              $scope.tops = oData.data.top
            })

      $scope.like = function (contentId) {
        return userService.like('games', contentId)
      }

      $scope.dislike = function (contentId) {
        return userService.dislike('games', contentId)
      }
    })
