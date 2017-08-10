angular.module('skyStream')
    .factory('userService', function (firebaseService) {
        function login(username, password, callback) {
            firebaseService.login(username, password, function (login) {
                if (login.status === 'LOGIN_SUCCEEDED') {
                    firebaseService.retrieve(username, function (retrieve) {
                        if (retrieve.status === 'RETRIEVE_SUCCEEDED') {
                            sessionStorage.skyStreamUsername = username
                            sessionStorage.skyStreamloggedIn = true

                            callback(login)
                        }
                    })
                } else {
                    callback(login)
                }
            })
        }

        function isLoggedIn() {
            return sessionStorage.skyStreamloggedIn
        }

        function logout() {
            sessionStorage.skyStreamloggedIn = false
        }

        function retrieve(callback) {
            firebaseService.retrieve(sessionStorage.skyStreamUsername, function(result) {
                callback(result.data)
            })
        }

        function like(contentType, contentId, contentName) {
            firebaseService.like(sessionStorage.skyStreamUsername, contentType, contentId, contentName)
        }

        function dislike(contentType, contentId, contentName) {
            firebaseService.dislike(sessionStorage.skyStreamUsername, contentType, contentId, contentName)
        }

        var userService = {
            register: firebaseService.register,
            login: login,
            isLoggedIn: isLoggedIn,
            retrieve: retrieve,
            update: firebaseService.update,
            logout: logout,
            like: like,
            dislike: dislike

        }

        return userService
    })
