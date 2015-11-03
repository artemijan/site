/**
 * Created by artem on 12/5/14.
 */

define([
        'angular',
        'objectpath',
        'tv4',
        'angular-route',
        'angular-sanitize',
        'angular-animate',
        'ui.bootstrap',
        'ui.bootstrap.tpls',
        'angular-schema-form',
        'angular-sf-bootstrap-decorator',
        'modules/common/index',
        'modules/auth/index'
    ],
    function (angular, objectpath, tv4) {
        window.tv4 = tv4;
        window.ObjectPath = objectpath;
        var app = angular.module('content', [
            'ngRoute',
            'ngAnimate',
            'ngSanitize',
            'ui.bootstrap',
            'ui.bootstrap.tpls',
            'schemaForm',
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