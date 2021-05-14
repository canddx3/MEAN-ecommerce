angular.module("loginController", ["loginServices"])

  .controller("loginCtrl", function (Login, $timeout, $location) {
    const app = this;


    if(Login.isLoggedIn()) {
      app.isLoggedIn = true;
      Login.getUser().then(function(data) {
        console.log(data.data.firstname);
        app.userFirstName = data.data.firstname;
        app.userLastName = data.data.lastname;
        app.userEmail = data.data.email;
        app.userAddress = data.data.address;
        app.userPhone = data.data.phone
      })
    } else {
        app.isLoggedIn = false;
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

    app.logoutUser = function() {
      Login.logout();
      $location.path('/logout');
      $timeout(function() {
        $location.path("/login");
      }, 2000);
    };
  });
