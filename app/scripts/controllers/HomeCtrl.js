/*global angular*/
'use strict';

angular.module('llcApp')
    .controller('HomeCtrl', ['$scope',
        function($scope) {
            $scope.datas = {
                'date': '280514',
                'normal': [
                    {
                        'hour': '1',
                        'value': '0.01235'
                    },
                    {
                        'hour': '2',
                        'value': '0.01755'
                    },
                    {
                        'hour': '2',
                        'value': '0.01755'
                    },
                    {
                        'hour': '2',
                        'value': '0.01755'
                    },
                    {
                        'hour': '2',
                        'value': '0.01755'
                    },
                    {
                        'hour': '2',
                        'value': '0.01755'
                    },
                    {
                        'hour': '2',
                        'value': '0.01755'
                    },
                    {
                        'hour': '2',
                        'value': '0.01755'
                    },
                    {
                        'hour': '2',
                        'value': '0.01755'
                    },
                    {
                        'hour': '2',
                        'value': '0.01755'
                    },
                    {
                        'hour': '2',
                        'value': '0.01755'
                    },
                    {
                        'hour': '2',
                        'value': '0.01755'
                    }
                ],
                'noche': [
                    {
                        'hour': '1',
                        'value': '0.01115'
                    },
                    {
                        'hour': '2',
                        'value': '0.02235'
                    }
                ],
                'electricCar': [
                    {
                        'hour': '1',
                        'value': '0.06235'
                    },
                    {
                        'hour': '2',
                        'value': '0.07235'
                    }
                ]
            };
        }
        ]);