angular.module('skyStream')
.controller('getStreamsController', function ($scope, DataService, $sce) {
  $scope.section = 'TOP STREAMS'
  $scope.notGame = ''
  DataService.getStreams()
  .then(function (oData) {
    oData.data.streams.forEach(function (key) {
      let url = 'https://player.twitch.tv/?channel=' + key.channel.display_name + '&autoplay=false'
      key.channel.display_name = $sce.trustAsResourceUrl(url)
    })
    $scope.names = oData.data.streams
    if($scope.names.length === 0){
      $scope.notGame += $routeParams.query + 'not found'
    }else{
    $scope.names = oData.data.streams
    }

  })
})
