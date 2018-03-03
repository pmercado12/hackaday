app.service('DiaService', ['$http', 'myConfig',
    function ($http, myConfig) {

        this.listar = function (success) {
            $http.get("/api/dia").success(function (data, status, headers, config) {
                success(data, status, headers, config);
            }).error(function (data, status) {

            });
        }
    }
]);