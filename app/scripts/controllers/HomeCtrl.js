/*global angular*/
'use strict';

angular.module('llcApp')
    .controller('HomeCtrl', ['$scope', 'HomeSrv',
        function($scope, HomeSrv) {
            HomeSrv.getValuesDay().then(function(data) {
                $scope.datas = data;
                $scope.firstHend = [];
                var i = 0;
                for (i; i < data.normalRate.length; i++) {
                    $scope.firstHend.push(data.normalRate[i].value);
                    
                }
                console.log(_.sortBy($scope.firstHend));
            });
        }
        ]);
