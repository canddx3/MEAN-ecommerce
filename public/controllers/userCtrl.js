angular.module('userController', ['userServices'])

.controller('signUpCtrl',function($http, $location, $timeout, User) {
    const app = this;

    app.signUpUser = function(signUpData) {
        app.loading = true;
        app.errorMessage=false;
        
        User.create(app.signUpData).then(function(data) {
            if (data.data.success) {
                app.loading = false;
                // creates successful messages
                app.successMessage = data.data.message;
                // redirect to home page after delay
                $timeout(function() {
                    $location.path('/');
                }, 2000);
            } else {
                //creates error message
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