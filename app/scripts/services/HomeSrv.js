/*global UrlApiServicesOrigins, angular*/
'use strict';
(function() {
    angular.module('llcApp').factory('HomeSrv', function($http, $q) {

        var url = "http://192.168.1.128:8084/lightlowcost/api/valuesDay/20140604";
        function getValuesDay() {
            var values = $q.defer();
            $http.get(url).then(function(data) {
                values.resolve(data.data);
            });
            return values.promise;
        }
        return {
            getValuesDay: getValuesDay
        };
    });
}());
