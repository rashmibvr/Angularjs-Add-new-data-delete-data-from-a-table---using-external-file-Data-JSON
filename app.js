var app = angular.module("myApp", []);
app.controller("myctr", function($scope, $http){
    $http.get("data.json").then(function(item){
        $scope.users = item.data;
    })
    $scope.removeUser=function(user){
        var removedUser=$scope.users.indexOf(user);
        $scope.users.splice(removedUser,1);
    }
    $scope.addUsers=function(){
        $scope.users.push({
                name:$scope.newName,
                age:$scope.newAge,
                salary:$scope.newSalary,
                company:$scope.newCompany
        });
    }
});