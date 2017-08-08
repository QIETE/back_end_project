angular.module('skyStream')

    .controller('myAccountController', function ($scope, $rootScope, $location, userService) {
        $rootScope.auth = true

        userService.retrieve(function(user) {
            $scope.name = user.name
            $scope.surname = user.surname
            $scope.username = user.username
            $scope.password = user.password
            $scope.email = user.email
            $scope.age = user.age
            $scope.country = user.country

            $scope.$apply()
        })

        $scope.update = function () {
            var user = {
                name: $scope.name,
                surname: $scope.surname,
                age: $scope.age,
                username: $scope.username,
                password: $scope.password,
                country: $scope.country,
                email: $scope.email

            }

            userService.update(user, function (result) {
                $scope.updated = result.status === 'UPDATE_SUCCEEDED'
                $scope.notupdated = result.status === 'ALREADY_UPDATED'

                $scope.$apply()
            })
        }
    })
