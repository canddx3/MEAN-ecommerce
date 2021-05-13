angular.module("loginController", ["loginServices"])

  .controller("loginCtrl", function (Auth, $timeout, $location) {
    const app = this;

    app.loginUser = function (loginData) {
      app.loading = true;
      app.errorMessage = false;

      Auth.login(app.loginData).then(function (data) {
        if (data.data.success) {
          app.loading = false;
          // creates successful messages
          app.successMessage = data.data.message;
          // redirect to home page after delay
          $timeout(function () {
            $location.path("/");
          }, 2000);
        } else {
          //creates error message
          app.loading = false;
          app.errorMessage = data.data.message;
        }
      });
    };
  });
