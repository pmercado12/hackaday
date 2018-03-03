app.controller("HorarioCtrl", function ($scope, $rootScope, $location, HorarioService, MateriaService, AulaService, DiaService) {

    $scope.listaHorarios = [];
    $scope.listaMaterias = [];
    $scope.listaAulas = [];
    $scope.listaDias = [];
    $scope.horario = {
        idDia: '',
        horaInicio: '',
        horaFin: '',
        idMateria: null,
        idAula: null
    };

    $scope.guardar = function () {
        HorarioService.guardar($scope.horario, function (data, status, headers, config) {
            $scope.listar();
        });
    }

    $scope.listar = function () {
        HorarioService.listar(function (data, status, headers, config) {
            $scope.listaHorarios = data;
        });
    }

    $scope.listarMaterias = function () {
        MateriaService.listar(function (data, status, headers, config) {
            $scope.listaMaterias = data;
        });
    }

    $scope.listarAulas = function () {
        AulaService.listar(function (data, status, headers, config) {
            $scope.listaAulas = data;
        });
    }

    $scope.listarDias = function () {
        DiaService.listar(function (data, status, headers, config) {
            $scope.listaDias = data;
        });
    }

    $scope.listar();
    $scope.listarAulas();
    $scope.listarMaterias();
    $scope.listarDias();


});