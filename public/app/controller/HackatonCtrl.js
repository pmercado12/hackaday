app.controller("HackatonCtrl", function ($scope, $rootScope, $location) {
    
    $scope.cambiarPaso = function(paso){
        $scope.tabPosicion = paso.nro;
        $location.path(paso.nombre);
    }
    $scope.inicio = function () {
        $scope.app = "Hackaton";        
        $scope.listaPasos = [{nro:1,nombre:"docentes",descripcion:"Docentes"},
                            {nro:2,nombre:"BenDatosDireccion",descripcion:"Datos Dirección"},
                            {nro:3,nombre:"materias",descripcion:"Materias"},
                            {nro:4,nombre:"BenDatosHabilitados",descripcion:"Datos Habilitados"},
                            {nro:5,nombre:"BenDatosCuentas",descripcion:"Datos Cuentas Bancarias"}];
        //$location.path($scope.pagina);
        $scope.tabPosicion = 1;
    }
    $scope.inicio();
});