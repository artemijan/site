/**
 * Created by artem on 12/5/14.
 */
define(
    ['./modules/main/App'],
    function (app) {
        'use strict';
        return app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/getAllItems/', {
                templateUrl: '/views/templates/viewItems.html'
            });
            $routeProvider.when('/addItems/', {
                templateUrl: '/views/templates/addItems.html'
            });
            $routeProvider.when('/about',{
                templateUrl:'/views/templates/about.html'
            });
            $routeProvider.when('/start',{
                templateUrl:'/views/templates/startInfo.html'
            });
            $routeProvider.when('/allCategories',{
                templateUrl:'/views/templates/allCategories.html'
            });
            $routeProvider.otherwise({
                redirectTo: '/start'
            });
        }]);
    });