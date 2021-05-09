angular.module('userCtrl', [])

.controller('signUpCtrl',function($http, $location) {
    const app = this;
    app.signUpUser = function(signUpData) {
        app.loading = true;
        app.errorMessage=false;
        
        $http.post('/api/user', app.signUpData).then(function(data) {
            app.errorMessage = false;
            if (data.data.success) {
                app.loading = false;
                app.successMessage = data.data.message;
                $location.path('/')
            } else {
                app.loading = false;
                app.errorMessage = data.data.message;
            }
        })
    };
})

.controller('loginCtrl', function($http) {
    this.loginUser = function(loginData) {
        console.log('Login successful');
        $http.get('/api/user', this.loginData);
    };
});