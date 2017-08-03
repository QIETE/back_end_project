angular.module('skyStream')
.factory('userService', function () {
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

  function register (user, callback) {
    var ref = database.ref('users/' + user.username)

    ref.once('value', function (result) {
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

  function login (user, callback) {
    console.log(user)
    var ref = database.ref('users/' + user.username)

    ref.once('value', function (result) {
      if (!result.val()) {
        callback('user doesn´t exists')
      } else {
        if (result.val().password === user.password) {
          callback('login ok')
        } else {
          callback('login not ok')
        }
      }
    })
  }

  function retrieve (username, callback) {
    var ref = database.ref('users/' + username)
    ref.once('value', function (result) {
      if (result.val()) {
        var data = {
          name: result.val().name,
          surname: result.val().surname,
          age: result.val().age,
          username: result.val().username,
          password: result.val().password,
          country: result.val().country,
          email: result.val().email

        }
        callback(data)
      } else {
        callback('user is not available')
      }
    })
  }

  var userService = {
    register: register,
    login: login,
    retrieve: retrieve
  }

  return userService
})
