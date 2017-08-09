angular.module('skyStream')
    .controller('myThingsController', function ($scope, $rootScope, userService, $document, $uibModal) {
        $rootScope.auth = true

        userService.retrieve(function (user) {
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
                    likeGames[id] = game
                } else {
                    if (dislikeGames === undefined) {
                        dislikeGames = {}
                    }
                    dislikeGames[id] = game
                }
            }

            $scope.likeGames = likeGames
            $scope.dislikeGames = dislikeGames

            var likeStreams
            var dislikeStreams

            for (var id in streams) {
                var stream = streams[id]

                if (stream.choice === 1) {
                    if (likeStreams === undefined) {
                        likeStreams = {}
                    }
                    likeStreams[id] = stream
                } else {
                    if (dislikeStreams === undefined) {
                        dislikeStreams = {}
                    }
                    dislikeStreams[id] = stream
                }
            }

            $scope.likeStreams = likeStreams
            $scope.dislikeStreams = dislikeStreams

            var likeVideos
            var dislikeVideos

            for (var id in videos) {
                var video = videos[id]

                if (video.choice === 1) {
                    if (likeVideos === undefined) {
                        likeVideos = {}
                    }
                    likeVideos[id] = video
                } else {
                    if (dislikeVideos === undefined) {
                        dislikeVideos = {}
                    }
                    dislikeVideos[id] = video
                }
            }

            $scope.likeVideos = likeVideos
            $scope.dislikeVideos = dislikeVideos

            $scope.$apply()
        })

        // modal

        $scope.open = function (contentType, contentId) {
            var modalInstance = $uibModal.open({
                animation: false,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'contentModal.html',
                controller: 'ModalController',
                resolve: {
                    contentType: function() {
                        return contentType
                    },
                    contentId: function() {
                        return contentId
                    }
                }
            })
        }
    })


angular.module('skyStream')
    .controller('ModalController', function ($scope, $uibModalInstance, contentType, contentId) {
        $scope.contentType = contentType

        $scope.contentId = contentId

        $scope.close = function () {
            $uibModalInstance.close()
        }
    });
