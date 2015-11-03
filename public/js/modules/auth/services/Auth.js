/**
 * Created by artem on 11/2/15.
 */
define(
    ['../module'],
    function (module) {
        'use strict';
        module.service(
            "content.Auth.LoginService",
            [
                '$q',
                '$uibModal',
                function ($q, $uibModal) {
                    var self = this;
                    self.logIn = function () {
                        var modalInstance = $uibModal.open({
                            animation: true,
                            templateUrl: '/views/auth/login-modal.html',
                            controller: 'content.Auth.ModalController',
                            controllerAs: 'controller',
                            size: 'xs',
                            windowClass: 'login-form'
                        });
                        modalInstance.result.then(function (str) {
                            //alert(str)
                        }, function () {
                            //closed
                        });
                    };

                    self.logOut = function () {
                        return 'logout ok';
                    };
                    self.register = function () {
                        var modalInstance = $uibModal.open({
                            animation: true,
                            templateUrl: '/views/auth/register-modal.html',
                            controller: 'content.Auth.ModalController',
                            controllerAs: 'controller',
                            size: 'xs',
                            windowClass: 'login-form'
                        });
                        modalInstance.result.then(function (user) {
                            //alert(user);
                        }, function () {
                            //closed
                        });
                    };
                    return self;
                }
            ]
        );
    }
);