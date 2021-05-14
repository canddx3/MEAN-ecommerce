angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html'
    })

    .when('/signup', {
        templateUrl: 'users/signUp.html',
        controller: 'signUpCtrl',
        controllerAs: 'signUp'
    })

    .when('/login', {
        templateUrl: 'users/login.html',
        controller: 'loginCtrl',
        controllerAs: 'login'
    })

    .when('/logout', {
        templateUrl: 'users/logout.html',
        controller: 'loginCtrl',
        controllerAs: 'logout'
    })

    .when('/profile', {
        templateUrl: 'users/profile.html'
    })

    .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

});

