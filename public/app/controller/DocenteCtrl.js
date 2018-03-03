app.controller("DocenteCtrl", function ($scope, $rootScope, $location,DocenteService) {
    
    $scope.listaDocentes = [];
    $scope.docente = {
        paterno: '',
        materno: '',
        nombres: '',
        ci: ''
    };

    $scope.guardar = function (){
        DocenteService.guardar($scope.docente,function (data, status, headers, config) {
            $scope.listar();
        });
    }

    $scope.listar = function (){
        DocenteService.listar(function (data, status, headers, config) {
            $scope.listaDocentes = data;
        });
    }

    $scope.listar();


});