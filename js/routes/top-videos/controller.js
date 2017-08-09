angular.module('skyStream')
    .controller('getTopVideosController', function ($scope, $rootScope, DataService, $sce, userService) {
      $rootScope.auth = true
      $scope.section = 'TOP VIDEOS'
      DataService.getTopVideos()
            .then(function (result) {
              result.data.videos.forEach(function (key) {
                var url = 'https://player.twitch.tv/?video=' + key._id + '&autoplay=false'
                key.trustUrl = $sce.trustAsResourceUrl(url)
              })
              $scope.videos = result.data.videos
            })
      $scope.like = function (contentId, contentName) {
        userService.like('videos', contentId, contentName)
      }

      $scope.dislike = function (contentId, contentName) {
        userService.dislike('videos', contentId, contentName)
      }
    })
