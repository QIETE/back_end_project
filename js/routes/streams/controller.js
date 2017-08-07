angular.module('skyStream')
    .controller('getStreamsController', function ($scope, $rootScope, DataService, $sce, userService) {
      $rootScope.auth = true
      $scope.section = 'TOP STREAMS'
      $scope.notGame = ''
      DataService.getStreams()
            .then(function (oData) {
              oData.data.streams.forEach(function (key) {
                let url = 'https://player.twitch.tv/?channel=' + key.channel.display_name + '&autoplay=false'
                key.channel.display_name = $sce.trustAsResourceUrl(url)
              })
              $scope.names = oData.data.streams
              if ($scope.names.length === 0) {
                $scope.notGame += $routeParams.query + 'not found'
              } else {
                $scope.names = oData.data.streams
              }
            })
      $scope.like = function (contentId) {
        console.log($scope.names._id)
        return userService.like('streams', contentId)
      }

      $scope.dislike = function (contentId) {
        return userService.dislike('streams', contentId)
      }
    })
