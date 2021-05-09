angular.module('authServices', [])

.factory('Auth', function() {
    const authFactory = {};

    authFactory.login = function() {
        return $http.get('/api/login', );
    }
    return authFactory;
});