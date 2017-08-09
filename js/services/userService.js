angular.module('skyStream')
    .factory('userService', function (firebaseService) {
        var user = {}


        function login(username, password, callback) {
            firebaseService.login(username, password, function (login) {
                if (login.status === 'LOGIN_SUCCEEDED') {
                    firebaseService.retrieve(username, function (retrieve) {
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
            firebaseService.retrieve(user.username, function(result) {
                callback(result.data)
            })
        }

        function like(contentType, contentId, contentName) {
            firebaseService.like(user.username, contentType, contentId, contentName)
        }

        function dislike(contentType, contentId, contentName) {
            firebaseService.dislike(user.username, contentType, contentId, contentName)
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
