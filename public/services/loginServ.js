angular.module('loginServices', [])

.factory('Auth', function($http) {
    const authFactory = {};

    // Auth.create(loginData)
    authFactory.login = function(loginData) {
        return $http.post('/api/login', loginData)
    };
    return authFactory;
})

