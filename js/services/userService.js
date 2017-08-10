angular.module('skyStream')
    .factory('userService', function (firebaseService) {
      function login (username, password, callback) {
        firebaseService.login(username, password, function (login) {
          if (login.status === 'LOGIN_SUCCEEDED') {
            firebaseService.retrieve(username, function (retrieve) {
              if (retrieve.status === 'RETRIEVE_SUCCEEDED') {
                sessionStorage.skyStream_username = username
                sessionStorage.skyStream_photo = retrieve.data.photo
                sessionStorage.skyStream_loggedIn = true

                callback(login)
              }
            })
          } else {
            callback(login)
          }
        })
      }

      function photo () {
        return sessionStorage.skyStream_photo
      }

      function isLoggedIn () {
        return sessionStorage.skyStream_loggedIn
      }

      function logout () {
        delete sessionStorage.skyStream_username
        delete sessionStorage.skyStream_loggedIn
        delete sessionStorage.skyStream_photo
      }

      function retrieve (callback) {
        firebaseService.retrieve(sessionStorage.skyStream_username, function (result) {
          callback(result.data)
        })
      }

      function like (contentType, contentId, contentName) {
        firebaseService.like(sessionStorage.skyStream_username, contentType, contentId, contentName)
      }

      function dislike (contentType, contentId, contentName) {
        firebaseService.dislike(sessionStorage.skyStream_username, contentType, contentId, contentName)
      }

      function update (user, callback) {
        firebaseService.update(user, function (result) {
          if (result.status === 'UPDATE_SUCCEEDED') {
            sessionStorage.skyStream_photo = user.photo
          }

          callback(result)
        })
      }

      var userService = {
        register: firebaseService.register,
        login: login,
        isLoggedIn: isLoggedIn,
        retrieve: retrieve,
        update: update,
        logout: logout,
        like: like,
        dislike: dislike,
        photo: photo

      }

      return userService
    })
