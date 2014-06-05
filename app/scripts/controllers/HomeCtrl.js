/*global angular, _*/
'use strict';

angular.module('llcApp')
    .controller('HomeCtrl', ['$scope', 'HomeSrv',
        function($scope, HomeSrv) {
            HomeSrv.getValuesDay().then(function(data) {
                $scope.datas = data.normalRate;
                $scope.changeData = function (rate) {
                    if (rate === 'normalRate') {
                        $scope.datas = data.normalRate;
                    }
                    if (rate === 'nightRate') {
                        $scope.datas = data.nightRate;
                    }
                    if (rate === 'carRate') {
                        $scope.datas = data.carRate;
                    }
                };
                // $scope.firstHend = [];
                // var i = 0;
                // for (i; i < data.normalRate.length; i++) {
                //     $scope.firstHend.push(data.normalRate[i].value);
                // }
            });
        }
        ]);
