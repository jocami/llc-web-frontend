/*global angular*/
'use strict';

angular.module('llcApp')
    .controller('UtilsCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.getClassActiveFromPath = function(path) {
            if ($location.path() === path) {
                return 'active';
            }
        };
    }]);