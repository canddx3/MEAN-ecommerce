angular.module('loginController', ['authServices'])

.controller('loginCtrl', function(Auth, $timeout, $location) {
    const app = this;

    // if(Auth.isLoggedIn()) {
    //     console.log('Success');
    //     Auth.getUser().then(function (data) {
    //         console.log(data);
    //       });
    // } else {
    //     console.log('Failure')
    // }

    app.loginUser = function(loginData) {
        app.loading = true;
        app.errorMessage=false;
        
        Auth.login(app.loginData).then(function(data) {
            if (data.data.success) {
                app.loading = false;
                // creates successful messages
                app.successMessage = data.data.message;
                // redirect to profile page after delay
                $timeout(function() {
                    $location.path('/profile');
                }, 2000);
            } else {
                //creates error message
                app.loading = false;
                app.errorMessage = data.data.message;
            }
        })
    };

    // app.logout = function() {
    //     Auth.logout();
    //     $timeout(function() {
    //         $location.path('/');
    //     }, 2000);
    // };
});


