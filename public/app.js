angular.module('userApp', ['appRoutes', 'userController', 'userServices', 'loginController', 'loginServices'])

.config(function($httpProvider) {
    $httpProvider.interceptors.push('LoginInterceptors');
})