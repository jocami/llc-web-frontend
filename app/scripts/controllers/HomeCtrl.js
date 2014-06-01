/*global angular*/
'use strict';

angular.module('llcApp')
    .controller('HomeCtrl', ['$scope',
        function($scope) {
            $scope.datas = 
                {
                   "id_valuesday": 20140530,
                   "nightRate":
                   [
                       {
                           "hour": "00:00-01:00",
                           "value": 70.24
                       },
                       {
                           "hour": "01:00-02:00",
                           "value": 64.87
                       },
                       {
                           "hour": "02:00-03:00",
                           "value": 61.88
                       },
                       {
                           "hour": "03:00-04:00",
                           "value": 60.65
                       },
                       {
                           "hour": "04:00-05:00",
                           "value": 58.97
                       },
                       {
                           "hour": "05:00-06:00",
                           "value": 58.94
                       },
                       {
                           "hour": "06:00-07:00",
                           "value": 60.94
                       },
                       {
                           "hour": "07:00-08:00",
                           "value": 64.35
                       },
                       {
                           "hour": "08:00-09:00",
                           "value": 68.4
                       },
                       {
                           "hour": "09:00-10:00",
                           "value": 68.86
                       },
                       {
                           "hour": "10:00-11:00",
                           "value": 67.66
                       },
                       {
                           "hour": "11:00-12:00",
                           "value": 67.28
                       },
                       {
                           "hour": "12:00-13:00",
                           "value": 68.61
                       },
                       {
                           "hour": "13:00-14:00",
                           "value": 140.79
                       },
                       {
                           "hour": "14:00-15:00",
                           "value": 137.57
                       },
                       {
                           "hour": "15:00-16:00",
                           "value": 136.04
                       },
                       {
                           "hour": "16:00-17:00",
                           "value": 133.83
                       },
                       {
                           "hour": "17:00-18:00",
                           "value": 132.64
                       },
                       {
                           "hour": "18:00-19:00",
                           "value": 131.42
                       },
                       {
                           "hour": "19:00-20:00",
                           "value": 131.91
                       },
                       {
                           "hour": "20:00-21:00",
                           "value": 134.33
                       },
                       {
                           "hour": "21:00-22:00",
                           "value": 136.35
                       },
                       {
                           "hour": "22:00-23:00",
                           "value": 135.13
                       },
                       {
                           "hour": "23:00-00:00",
                           "value": 60.25
                       }
                   ],
                   "normalRate":
                   [
                       {
                           "hour": "00:00-01:00",
                           "value": 123.32
                       },
                       {
                           "hour": "01:00-02:00",
                           "value": 117.79
                       },
                       {
                           "hour": "02:00-03:00",
                           "value": 114.71
                       },
                       {
                           "hour": "03:00-04:00",
                           "value": 113.45
                       },
                       {
                           "hour": "04:00-05:00",
                           "value": 111.72
                       },
                       {
                           "hour": "05:00-06:00",
                           "value": 111.68
                       },
                       {
                           "hour": "06:00-07:00",
                           "value": 113.74
                       },
                       {
                           "hour": "07:00-08:00",
                           "value": 117.26
                       },
                       {
                           "hour": "08:00-09:00",
                           "value": 121.43
                       },
                       {
                           "hour": "09:00-10:00",
                           "value": 121.9
                       },
                       {
                           "hour": "10:00-11:00",
                           "value": 120.66
                       },
                       {
                           "hour": "11:00-12:00",
                           "value": 120.28
                       },
                       {
                           "hour": "12:00-13:00",
                           "value": 121.64
                       },
                       {
                           "hour": "13:00-14:00",
                           "value": 121.92
                       },
                       {
                           "hour": "14:00-15:00",
                           "value": 118.71
                       },
                       {
                           "hour": "15:00-16:00",
                           "value": 117.2
                       },
                       {
                           "hour": "16:00-17:00",
                           "value": 115.01
                       },
                       {
                           "hour": "17:00-18:00",
                           "value": 113.82
                       },
                       {
                           "hour": "18:00-19:00",
                           "value": 112.62
                       },
                       {
                           "hour": "19:00-20:00",
                           "value": 113.09
                       },
                       {
                           "hour": "20:00-21:00",
                           "value": 115.5
                       },
                       {
                           "hour": "21:00-22:00",
                           "value": 117.51
                       },
                       {
                           "hour": "22:00-23:00",
                           "value": 116.3
                       },
                       {
                           "hour": "23:00-00:00",
                           "value": 113.04
                       }
                   ],
                   "carRate":
                   [
                       {
                           "hour": "00:00-01:00",
                           "value": 73.86
                       },
                       {
                           "hour": "01:00-02:00",
                           "value": 61.98
                       },
                       {
                           "hour": "02:00-03:00",
                           "value": 59.05
                       },
                       {
                           "hour": "03:00-04:00",
                           "value": 57.85
                       },
                       {
                           "hour": "04:00-05:00",
                           "value": 56.19
                       },
                       {
                           "hour": "05:00-06:00",
                           "value": 56.16
                       },
                       {
                           "hour": "06:00-07:00",
                           "value": 58.13
                       },
                       {
                           "hour": "07:00-08:00",
                           "value": 67.77
                       },
                       {
                           "hour": "08:00-09:00",
                           "value": 71.96
                       },
                       {
                           "hour": "09:00-10:00",
                           "value": 72.43
                       },
                       {
                           "hour": "10:00-11:00",
                           "value": 71.19
                       },
                       {
                           "hour": "11:00-12:00",
                           "value": 70.81
                       },
                       {
                           "hour": "12:00-13:00",
                           "value": 72.18
                       },
                       {
                           "hour": "13:00-14:00",
                           "value": 140.79
                       },
                       {
                           "hour": "14:00-15:00",
                           "value": 137.57
                       },
                       {
                           "hour": "15:00-16:00",
                           "value": 136.04
                       },
                       {
                           "hour": "16:00-17:00",
                           "value": 133.83
                       },
                       {
                           "hour": "17:00-18:00",
                           "value": 132.64
                       },
                       {
                           "hour": "18:00-19:00",
                           "value": 131.42
                       },
                       {
                           "hour": "19:00-20:00",
                           "value": 131.91
                       },
                       {
                           "hour": "20:00-21:00",
                           "value": 134.33
                       },
                       {
                           "hour": "21:00-22:00",
                           "value": 136.35
                       },
                       {
                           "hour": "22:00-23:00",
                           "value": 135.13
                       },
                       {
                           "hour": "23:00-00:00",
                           "value": 63.54
                       }
                   ]
                };
        }
    ]);