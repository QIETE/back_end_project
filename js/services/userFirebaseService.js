angular.module('skyStream')
    .factory('userFirebaseService', function() {
        var config = {
            apiKey: 'AIzaSyBiVj6w14u24CUoVAchlWv_NO9A6NeAwkk',
            authDomain: 'skystream-66015.firebaseapp.com',
            databaseURL: 'https://skystream-66015.firebaseio.com',
            projectId: 'skystream-66015',
            storageBucket: 'skystream-66015.appspot.com',
            messagingSenderId: '908767214855'
        }

        firebase.initializeApp(config)
        var database = firebase.database()

        function register(user, callback) {
            var ref = database.ref('users/' + user.username)

            ref.once('value', function(result) {
                if (result.val()) {
                    callback({
                        status: 'ALREADY_REGISTERED',
                        message: 'user already registered'
                    })
                } else {
                    var data = {
                        name: user.name,
                        surname: user.surname,
                        age: user.age,
                        password: user.password,
                        country: user.country,
                        email: user.email
                    }

                    var ref = database.ref('users')
                    database.ref('users').child(user.username).set(data)
                    callback({
                        status: 'REGISTER_SUCCEEDED',
                        message: 'user successfully registered'
                    })
                }
            })
        }

        function login(username, password, callback) {
            var ref = database.ref('users/' + username)

            ref.once('value', function(result) {
                if (!result.val()) {
                    callback('user doesn´t exists')
                } else {
                    if (result.val().password === password) {
                        callback({
                            status: 'LOGIN_SUCCEEDED',
                            message: 'user successfully logged in'
                        })
                    } else {
                        callback({
                            status: 'LOGIN_FAILED',
                            message: 'username and / or password incorrect'
                        })
                    }
                }
            })
        }

        function retrieve(username, callback) {
            var ref = database.ref('users/' + username)
            ref.once('value', function(result) {
                if (result.val()) {
                    var user = {
                        name: result.val().name,
                        surname: result.val().surname,
                        age: result.val().age,
                        username: username,
                        password: result.val().password,
                        country: result.val().country,
                        email: result.val().email

                    }
                    callback({
                        status: 'RETRIEVE_SUCCEEDED',
                        message: 'user successfully retrieved',
                        data: user
                    })
                } else {
                    callback({
                        status: 'RETRIEVE_FAILED',
                        message: 'user could not be retrieved'
                    })
                }
            })
        }

        function update(user, callback) {
            var ref = database.ref('users/' + user.username)

            ref.once('value', function(result) {
                var data = {
                    name: user.name,
                    surname: user.surname,
                    age: user.age,
                    password: user.password,
                    country: user.country,
                    email: user.email
                }

                var ref = database.ref('users')
                database.ref('users').child(user.username).set(data)
                callback({
                    status: 'UPDATE_SUCCEEDED',
                    message: 'user successfully updated'
                })
            })
        }

        function like() {
            var ref = database.ref('users')

            var data = {
                analytics: user.analytics,
                likes: user.likes

            }
            database.ref('users').child(user.analytics).set(data)
            callback({
                status: 'LIKE_SUCCEEDED',
                message: 'user successfully liked'
            })

            function dislike(username) {
            

                var ref = database.ref('users/' + usersname +  '/analytics' )
                ref.on('value', function(snapshot) {
                    if (snapshot.val()) {
                        firebase.database().ref('users/' + usersname + '/analytics').set("dislikes");
                    }

                })
            }




            // database.ref('users').child(user.analytics).set(data)
            // callback({
            //     status: 'DISLIKE_SUCCEEDED',
            //     message: 'user successfully disliked'
            // })
        }

        var userFirebaseService = {
            register: register,
            login: login,
            retrieve: retrieve,
            update: update,
            like: like,
            dislike: dislike
        }

        return userFirebaseService

            })

    