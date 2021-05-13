angular.module('loginServices', [])

.factory('Login', function($http, LoginToken) {
    const loginFactory = {};

    // Login.create(loginData)
    loginFactory.login = function(loginData) {
        return $http.post('/api/login', loginData).then(function(data) {
            console.log(data.data.token);
            LoginToken.setToken(data.data.token);
            return data;
        })
    };
    
    // Login.isLoggedIn()
    loginFactory.isLoggedIn = function() {
        if(LoginToken.getToken()) {
            return true;
        } else {
            return false;
        }
    };

    // Login.logOut()
    loginFactory.logout = function() {
        LoginToken.setToken();
    };

    return loginFactory;
})

.factory('LoginToken', function($window) {
    const loginTokenFactory = {};

    // loginToken.settoken(token)
    loginTokenFactory.setToken = function(token) {
        if(token) {
            $window.localstorage.setItem('token', token);
        } else {
            $window.localstorage.removeItem('token');
        }
    };

    // logintoken.gettoken(token)
    loginTokenFactory.getToken = function() {
        return $window.localstorage.getItem(token);
    };
    return loginTokenFactory;
  })

