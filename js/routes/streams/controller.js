angular.module('skyStream')
    .controller('getStreamsController', function ($scope, $rootScope, DataService, $sce, userService) {
      $rootScope.auth = true
      $scope.section = 'TOP STREAMS'
      $scope.notGame = ''
      DataService.getStreams()
            .then(function (result) {
              result.data.streams.forEach(function (key) {
                let url = 'https://player.twitch.tv/?channel=' + key.channel.display_name + '&autoplay=false'
                key.channel.display_name = $sce.trustAsResourceUrl(url)
              })
              $scope.streams = result.data.streams
              if ($scope.streams.length === 0) {
                $scope.notGame += $routeParams.query + 'not found'
              }
            })

      $scope.like = function (contentId) {
        userService.like('streams', contentId)
      }

      $scope.dislike = function (contentId) {
        userService.dislike('streams', contentId)
      }
    })
