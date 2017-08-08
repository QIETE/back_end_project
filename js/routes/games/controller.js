angular.module('skyStream')
    .controller('getGamesController', function ($scope, $rootScope, DataService, userService) {
      $rootScope.auth = true
      $scope.section = 'TOP GAMES'
      DataService.getGames()
            .then(function (oData) {
              $scope.tops = oData.data.top
            })

      $scope.like = function (contentId, contentName) {
        userService.like('games', contentId, contentName)
      }

      $scope.dislike = function (contentId, contentName) {
        userService.dislike('games', contentId, contentName)
      }
    })
