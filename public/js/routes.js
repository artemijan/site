/**
 * Created by artem on 12/5/14.
 */
define(
    ['./modules/main/App'],
    function (app) {
        'use strict';
        return app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/location/', {
                templateUrl: '/views/templates/location.html'
            });
            $routeProvider.when('/about', {
                templateUrl: '/views/templates/about.html'
            });
            $routeProvider.when('/start', {
                templateUrl: '/views/templates/startInfo.html'
            });
            $routeProvider.otherwise({
                redirectTo: '/start'
            });
        }]);
    });