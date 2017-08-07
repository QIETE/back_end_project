angular.module('skyStream')
.controller('getTopVideosController', function ($scope, $rootScope, DataService, $sce) {
  $rootScope.auth = true
  $scope.section = 'TOP VIDEOS'
  DataService.getTopVideos()
  .then(function (oData) {
    oData.data.videos.forEach(function (key) {
      var url = 'https://player.twitch.tv/?video=' + key._id + '&autoplay=false'
      key._id = $sce.trustAsResourceUrl(url)
    })
    $scope.videos = oData.data.videos
  })
  $scope.like = function () {
    return userFirebaseService.like()
  }

  $scope.dislike = function () {
    return userFirebaseService.dislike()
  }
})
