angular.module('userServices', [])

.factory('User', function($http) {
    userFactory = {};
    // User.create(signUpData)
    userFactory.create = function(signUpData) {
        return $http.post('/api/user', signUpData);
    }
    return userFactory;
});