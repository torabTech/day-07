angular.module('myAngularApp').factory('myFactory',myFactory);

function myFactory($http){
    return{
        getOneDoc: getOne
    }
    function getOne(){
        return $http.get("https://gorest.co.in/public/v1/users")
        .then(complete)
        .catch(failed);
        function complete(response){
            return response.data;
        }function failed(error){
            return error;
        }
    }
}