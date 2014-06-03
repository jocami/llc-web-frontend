/*global angular*/
'use strict';

angular.module('llcApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.date',
    'ui.bootstrap'
])
    .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/pages/home.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });
