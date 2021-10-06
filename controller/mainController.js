angular.module("myAngularApp").controller("MainController",MainController);

function MainController(myFactory){
    const vm = this;
    
    myFactory.getOneDoc().then(function(response){
        vm.results = response;
    })

    /* $http.get("https://gorest.co.in/public/v1/users").then(function(response){
        vm.results = response.data;
    }); */

}