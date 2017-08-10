angular.module('skyStream')
    .factory('userService', function (firebaseService) {
        function login(username, password, callback) {
            firebaseService.login(username, password, function (login) {
                if (login.status === 'LOGIN_SUCCEEDED') {
                    firebaseService.retrieve(username, function (retrieve) {
                        if (retrieve.status === 'RETRIEVE_SUCCEEDED') {
                            sessionStorage.skyStream_username = username
                            sessionStorage.skyStream_loggedIn = true

                            callback(login)
                        }
                    })
                } else {
                    callback(login)
                }
            })
        }

        function isLoggedIn() {
            return sessionStorage.skyStream_loggedIn
        }

        function logout() {
            delete sessionStorage.skyStream_username
            delete sessionStorage.skyStream_loggedIn
        }

        function retrieve(callback) {
            firebaseService.retrieve(sessionStorage.skyStream_username, function(result) {
                callback(result.data)
            })
        }

        function like(contentType, contentId, contentName) {
            firebaseService.like(sessionStorage.skyStream_username, contentType, contentId, contentName)
        }

        function dislike(contentType, contentId, contentName) {
            firebaseService.dislike(sessionStorage.skyStream_username, contentType, contentId, contentName)
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
