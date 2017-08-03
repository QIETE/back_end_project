angular.module('skyStream')
    .factory('userService', function(userFirebaseService) {

        var user;

        function login(username, password, callback) {
            userFirebaseService.login(username, password, function(result) {
                if (result.status === 'LOGIN_SUCCEEDED') {
                    userFirebaseService.retrieve(username, function(result) {
                        if (result.status = 'RETRIEVE_SUCCEEDED') {
                            user = result.data
                        }
                    })
                }

                delete result.data
                
                callback(result)
            })
        }

        function retrieve() {
          return user;
        }

        var userService = {
            register: userFirebaseService.register,
            login: login,
            retrieve: retrieve
        }

        return userService;
    })