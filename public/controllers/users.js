angular.module('userCtrl', [])

.controller('signUpCtrl',function() {
    this.signUpUser = function(signUpData) {
        console.log('testing SIGNUP button');
        console.log(this.signUpData);
    };
})

.controller('loginCtrl', function() {
    this.loginUser = function(loginData) {
        console.log('testing LOGIN button');
        console.log(this.loginData);
    };
});