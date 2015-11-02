/**
 * Created by artem on 12/5/14.
 */

define([
        'angular',
        'angular-route',
        'angular-animate',
        'ui.bootstrap',
        'ui.bootstrap.tpls',
        'modules/item/index',
        'modules/common/index',
        'modules/auth/index'
    ],
    function (angular) {
        var app = angular.module('content', [
            'ngRoute',
            'ngAnimate',
            'ui.bootstrap',
            'content.Item',
            'content.Common',
            'content.Auth'
        ]);
        app.run([
            '$rootScope',
            'content.Auth.LoginService',
            function ($rootScope, loginService) {
                $rootScope.signIn = function () {
                    loginService.logIn();
                };
                $rootScope.signUp = function () {
                    loginService.register();
                };

                $rootScope.signOut = function () {
                    loginService.logOut();
                };
            }
        ]);
        return app;
    }
);