/*global angular*/
'use strict';

angular.module('llcApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.date',
    'ui.bootstrap'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/timeline', {
                templateUrl: 'views/pages/timeline.html'
            })
            .when('/statistics', {
                templateUrl: 'views/pages/statistics.html'
            })
            .when('/contact', {
                templateUrl: 'views/pages/contact.html'
            })
            .otherwise({
                redirectTo: '/timeline'
            });
    });