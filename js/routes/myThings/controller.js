angular.module('skyStream')
    .controller('myThingsController', function ($scope, $rootScope, userService) {
        $rootScope.auth = true
        // $scope.likes
        // $scope.dislikes
        var user = userService.retrieve()

        var analytics = user.analytics

        var games = user.analytics.games
        var streams = user.analytics.streams
        var videos = user.analytics.videos

        $scope.games = games

        


    })
