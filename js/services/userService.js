angular.module('skyStream')
    .factory('userService', function (userFirebaseService) {
        var user = {}

        function login(username, password, callback) {
            userFirebaseService.login(username, password, function (login) {
                if (login.status === 'LOGIN_SUCCEEDED') {
                    userFirebaseService.retrieve(username, function (retrieve) {
                        if (retrieve.status === 'RETRIEVE_SUCCEEDED') {
                            user.username = username
                            user.loggedIn = true

                            callback(login)
                        }
                    })
                } else {
                    callback(login)
                }
            })
        }

        function isLoggedIn() {
            return user.loggedIn
        }

        function logout() {
            user.loggedIn = false
        }

        function retrieve(callback) {
            userFirebaseService.retrieve(user.username, function(result) {
                callback(result.data)
            })
        }

        function like(contentType, contentId, contentName) {
            userFirebaseService.like(user.username, contentType, contentId, contentName)
        }

        function dislike(contentType, contentId, contentName) {
            userFirebaseService.dislike(user.username, contentType, contentId, contentName)
        }

        var userService = {
            register: userFirebaseService.register,
            login: login,
            isLoggedIn: isLoggedIn,
            retrieve: retrieve,
            update: userFirebaseService.update,
            logout: logout,
            like: like,
            dislike: dislike

        }

        return userService
    })
