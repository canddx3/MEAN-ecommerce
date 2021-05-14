angular.module("loginController", ["loginServices"])

  .controller("loginCtrl", function (Login, $timeout, $location) {
    const app = this;

    if(Login.isLoggedIn()) {
      console.log('User logged in');
      Login.getUser()
    } else {
      console.log('not logged in');
    }

    app.loginUser = function (loginData) {
      app.loading = true;
      app.errorMessage = false;

      Login.login(app.loginData).then(function (data) {
        if (data.data.success) {
          app.loading = false;
          // creates successful messages
          app.successMessage = data.data.message + '...redirecting';
          // redirect to home page after delay
          $timeout(function() {
            $location.path("/");
          }, 2000);
        } else {
          //creates error message
          app.loading = false;
          app.errorMessage = data.data.message;
        }
      });
    };

    app.logout = function() {
      Login.logout();
      $location.path('/logout');
      $timeout(function() {
        $location.path("/");
      }, 2000);
    };
  });
