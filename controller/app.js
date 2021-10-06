angular.module("myAngularApp",["ngRoute"]).config(config);

function config($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "template/main.html",
        controller: "MainController",
        controllerAs: "mainCtrl"
    }).otherwise({
        redirectTo: "/"
    });
}