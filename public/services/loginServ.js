angular.module('loginServices', [])

.factory('Login', function($http, LoginToken) {
    const loginFactory = {};

    // Login.create(loginData)
    loginFactory.login = function(loginData) {
        return $http.post('/api/login', loginData).then(function(data) {
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

    loginFactory.getUser = function() {
        if(LoginToken.getToken) {
            return $http.post('/api/profile');
        } else {
            $q.reject({ Message: "user has no token"})
        }
      }

    // Login.logout()
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
            $window.localStorage.setItem('token', token);
        } else {
            $window.localStorage.removeItem('token');
        }
    };

    // logintoken.gettoken(token)
    loginTokenFactory.getToken = function() {
        //  getItem is coming back undefined
        return $window.localStorage.getItem('token');
    };
    
    return loginTokenFactory;
  })

  .factory('LoginInterceptors', function(LoginToken) {
      const loginInterceptorsFactory = {};

      loginInterceptorsFactory.request = function(config) {
          const token = LoginToken.getToken();
          if(token) 
          config.headers['x-access-token'] = token;
          return config;
      };

      return loginInterceptorsFactory
  });

