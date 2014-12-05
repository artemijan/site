/**
 * Created by artem on 12/5/14.
 */
define(
    ['./page-content/content'],
    function (app) {
        'use strict';
        return app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/getAllItems/', {
                templateUrl: '/html/templates/viewItems.html'
            });
            $routeProvider.when('/addItems/', {
                templateUrl: '/html/templates/addItems.html'
            });
            $routeProvider.when('/about',{
                templateUrl:'/html/templates/about.html'
            });
            $routeProvider.when('/start',{
                templateUrl:'/html/templates/startInfo.html'
            });
            $routeProvider.otherwise({
                redirectTo: '/start'
            });
        }]);
    });