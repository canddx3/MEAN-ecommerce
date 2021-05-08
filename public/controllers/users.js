angular.module('userCtrl', [])

.controller('signUpCtrl',function($http) {
    this.signUpUser = function(signUpData) {
        console.log('form submitted');
        console.log(this.signUpData);
        $http.post('/api/user', this.signUpData);
    };
})

.controller('loginCtrl', function($http) {
    this.loginUser = function(loginData) {
        console.log('Login successful');
        console.log(this.loginData);
        $http.get('/api/user', this.loginData);
    };
});