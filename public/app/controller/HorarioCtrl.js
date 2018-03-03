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



    $scope.validarHorario = function () {
        var horaAuxIni;
        var horaAuxFin;

        var idDia = $scope.horario.idDia;

        var horaIniNueva = parseInt($scope.horario.horaInicio.replace(":", ""));
        var horaFinNueva = parseInt($scope.horario.horaFin.replace(":", "")) + 1;

        if (horaIniNueva == horaFinNueva) {
            alert("No puede ser iguales la hora inicio y fin ");
            return false;
        }

        for (horario of $scope.listaHorarios) {
            if (horario.idDia == idDia && horario.idAula == $scope.horario.idAula) {
                horaAuxIni = parseInt(horario.horaInicio.replace(":", ""));
                horaAuxFin = parseInt(horario.horaFin.replace(":", ""));

                if (horaIniNueva < horaAuxFin || horaFinNueva < horaAuxIni) {
                //if ((horaIniNueva >= horaAuxIni && horaIniNueva < horaAuxFin) && (horaFinNueva > horaAuxIni && horaFinNueva <= horaAuxFin)) {
                    alert("No puede haber 2 materias en el mismo horario y aula ");
                    return false;
                }
            }
        }
        return true;
    }

    $scope.guardar = function () {

        if (!$scope.validarHorario()) {
            return;
        }

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