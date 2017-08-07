angular.module('skyStream')
    .factory('userService', function(userFirebaseService) {

        var user;

        function login(username, password, callback) {
            userFirebaseService.login(username, password, function(login) {
                if (login.status === 'LOGIN_SUCCEEDED') {
                    userFirebaseService.retrieve(username, function(retrieve) {
                        if (retrieve.status === 'RETRIEVE_SUCCEEDED') {
                            user = retrieve.data
                            
                            callback(login)
                        }
                    })
                } else {
                    callback(login)
                }
            })
        }

        function retrieve() {
          return user;
        }

        function logout() {
            user = undefined;
        }

        var userService = {
            register: userFirebaseService.register,
            login: login,
            retrieve: retrieve,
            logout: logout
        }

        return userService;
    })