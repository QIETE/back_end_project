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

        var likeGames
        var dislikeGames

        for (var id in games) {
            var game = games[id]

            if (game.choice === 1) {
                if (likeGames === undefined) {
                    likeGames = {}
                }
                likeGames[id] = game;
            } else {
                if (dislikeGames === undefined) {
                    dislikeGames = {}
                }
                dislikeGames[id] = game;
            }
        }

        $scope.likeGames = likeGames
        $scope.dislikeGames = dislikeGames
    })
