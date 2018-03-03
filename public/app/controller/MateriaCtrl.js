app.controller("MateriaCtrl", function ($scope, $rootScope, $location,MateriaService, DocenteService) {
    
    $scope.listaMaterias = [];
    $scope.listaDocentes = [];
    $scope.materia = {
        sigla: '',
        titulo: '',
        idDocente: null
    };

    $scope.guardar = function (){
        MateriaService.guardar($scope.materia,function (data, status, headers, config) {
            $scope.listar();
        });
    }

    $scope.listar = function (){
        MateriaService.listar(function (data, status, headers, config) {
            $scope.listaMaterias = data;
        });
    }

    $scope.listarDocentes = function (){
        DocenteService.listar(function (data, status, headers, config) {
            $scope.listaDocentes = data;
        });
    }

    $scope.listar();
    $scope.listarDocentes();


});