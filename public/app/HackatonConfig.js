app.config(function($routeProvider, $httpProvider) {
    $routeProvider        
        /*.when("/", {
            controller: "InicioCtrl",
            templateUrl: "app/template/inicio.html"
        })*/
        .when("/docentes", {
            controller: "DocenteCtrl",
            templateUrl: "app/template/docentes.html"
        })
        .when("/materias", {
            controller: "MateriaCtrl",
            templateUrl: "app/template/materias.html"
        })
        
                
        ;
        
    //$httpProvider.interceptors.push('xmHttpInterceptor');
});