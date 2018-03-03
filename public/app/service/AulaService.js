app.service('AulaService', ['$http', 'myConfig',
function ($http, myConfig) {
 
    this.listar = function (success){
        $http.get("/api/aula").success(function (data, status, headers, config) {
            success(data, status, headers, config);
        }).error(function (data, status) {
            
        });
    }

    this.guardar = function (docente, success){
        $http.post("/api/aula",docente).success(function (data, status, headers, config) {
            success(data, status, headers, config);
        }).error(function (data, status) {
            
        });
    }
}
]);