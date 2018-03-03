app.controller("AulaCtrl", function ($scope, $rootScope, $location,AulaService) {
    
    $scope.listaAula = [];
    $scope.aula = {
        aula: ''       
    };

    $scope.guardar = function (){
        AulaService.guardar($scope.aula,function (data, status, headers, config) {
            $scope.listar();
        });
    }

    $scope.listar = function (){
        AulaService.listar(function (data, status, headers, config) {
            $scope.listaAula = data;
        });
    }

    $scope.listar();


});