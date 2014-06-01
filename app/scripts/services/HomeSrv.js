/*global angular*/
'use strict';

angular.module('llcApp')
    .factory('HomeSrv', ['$scope', function($http, $q) {

        var url = "http://localhost:8080/lightlowcost/api/valuesDay/20140512";

        function getValuesDay() {
            var values = $q.defer();
            $http.get(url).then(function(data) {
                values.resolve(data);
            });
            return values.promise;
        }
        return {
            getValuesDay: getValuesDay
        };
    }
    }]);