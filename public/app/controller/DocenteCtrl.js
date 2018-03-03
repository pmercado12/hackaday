app.controller("DocenteCtrl", function ($scope, $rootScope, $location,DocenteService, HorarioService) {
    
    $scope.listaDocentes = [];
    $scope.listaHorariosDocente = [];
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

    $scope.listarHorariosPorDocente = function (docente){
        HorarioService.listarPorDocente(docente.idDocente, function (data, status, headers, config) {
            $scope.listaHorariosDocente = data;
        });
    }

    $scope.listar();


});