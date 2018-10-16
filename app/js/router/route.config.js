(function(){
    'use strict';

    angular
        .module('handleUser')
        .config(config);

function config($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: "app/js/layout/login.html",
            controller: "handleUserLoginController",
            controllerAs: "UserLogin"
        });  
        
    $routeProvider
        .when('/register', {
            templateUrl: "app/js/layout/register.html",
            controller: "UserRegisterController",
            controllerAs: "UserRegister"
        });        
        
    $routeProvider
        .when('/user', {
            templateUrl: "app/js/layout/user.html",
            controller: "UserDetailsController",
            controllerAs: "UserDetails"
        });  

    $routeProvider.otherwise({redirectTo: '/'});
}})();