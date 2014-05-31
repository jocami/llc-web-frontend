/*global angular*/
'use strict';

angular.module('llcApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.date',
    'ui.bootstrap',
    'pascalprecht.translate'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/pages/home.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });
    .config(['$translateProvider',
        function ($translateProvider) {
            
            $translateProvider.useStaticFilesLoader({
                  prefix: 'i18n/language_',
                  suffix: '.json'
                });
            $translateProvider.preferredLanguage('es');
        }
    ]);