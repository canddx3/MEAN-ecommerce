angular.module('authServices', [])

.factory('Auth', function($http) {
    const authFactory = {};

    authFactory.login = function(loginData) {
        return $http.post('/api/login', loginData );
    }
    return authFactory;
});