/*global angular*/
'use strict';

angular.module('llcApp')
    .controller('TimelineCtrl', ['$scope',
        function($scope) {

            $scope.today = function() {
                $scope.dt = new Date();
            };
            $scope.today();

            $scope.clear = function() {
                $scope.dt = null;
            };

            $scope.disabled = function(date, mode) {
                return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
            };

            $scope.toggleMin = function() {
                $scope.minDate = $scope.minDate ? null : new Date();
            };
            $scope.toggleMin();

            $scope.open = function($event) {
                $event.preventDefault();
                $event.stopPropagation();

                $scope.opened = true;
            };

            $scope.oneAtATime = true;
            $scope.isOpen = true;

            $scope.cheap = ['Item 1', 'Item 2', 'Item 3'];
            $scope.expensive = ['Item 1', 'Item 2', 'Item 3'];

            $scope.addItem = function(object) {
                var newItem = object.length + 1;
                object.push('Item ' + newItem);
            };

            $scope.deleteItem = function(object, index) {
                object.splice(index, 1);
            };
        }
        ]);