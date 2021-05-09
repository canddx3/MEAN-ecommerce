angular.module('authServices', [])

.factory('Auth', function($http, AuthToken) {
    const authFactory = {};

    // Auth.create(loginData)
    authFactory.login = function(loginData) {
        return $http.post('/api/login', loginData).then(function(data) {
            // AuthToken.setToken(data.data.token);
            console.log('data')
            return data;
        });
    };

    // // Auth.isLoggedIn()
    // authFactory.isLoggedIn = function() {
    //     if(AuthToken.getToken()) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // };

    // // Auth.getUser()
    // authFactory.getUser = function() {
    //     if(AuthToken.getToken) {
    //         return $http.post('/api/profile')
    //     } else {
    //         $q.reject({ message: 'User has no token'});
    //     }
    // };

    // // Auth.Logout()
    // authFactory.logout = function() {
    //     AuthToken.setToken();
    // };

    return authFactory;
})

.factory('AuthToken', function($window) {
    const authTokenFactory = {};

    // Authtoken.setToken(token)
    authTokenFactory.setToken = function(token) {
        // if(token) {
            $window.localstorage.setItem('token', token);
        // } else {
        //     $window.localstorage.removeItem('token');
        // }
    }

//     // Authtoken.getToken(token)
//     authTokenFactory.getToken = function() {
//         return $window.localstorage.getItem('token');
//     };

    return authTokenFactory;
});

