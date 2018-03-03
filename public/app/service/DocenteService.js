app.service('DocenteService', ['$http', 'myConfig',
function ($http, myConfig) {
 
    this.listar = function (success){
        $http.get("/api/docentes").success(function (data, status, headers, config) {
            success(data, status, headers, config);
        }).error(function (data, status) {
            
        });
    }

    this.guardar = function (docente, success){
        $http.post("/api/docentes",docente).success(function (data, status, headers, config) {
            success(data, status, headers, config);
        }).error(function (data, status) {
            
        });
    }

    /*this.BenCta = {
        path: "BenCta",
        getCuentas: function () {
            return $http.get(myConfig.rest + "/" + this.path + "/" + "getCuentas");
        },            
        modaRechazadoItem: function (idItem, razonRechazo,idItemRel) {
            return $http.post(myConfig.rest + "/" + this.path + "/" + "mar", {idItem: idItem, razonRechazo: razonRechazo,idItemRel:idItemRel});
        },
        editarItem: function (item) {
            var params = {
                tipoOperacion: item.tipoOperacion,
                nivelCatalogo: item.nivelCatalogo,
                idItem: item.idItem,
                codigoItem: item.codigoItem,
                descItem: item.descItem,
                razonOperacion: item.razonOperacion
            };
            return $http.post(myConfig.rest + "/" + this.path + "/" + "editar", params);
        }
    };
    
    this.Ban = {
        path: "Ban",
        getBancos: function () {
            return $http.get(myConfig.rest + "/" + this.path + "/" + "getBancos");
        }
    }*/
}
]);
