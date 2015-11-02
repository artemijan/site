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
                'dataService',
                '$uibModal',
                function ($q, dataService, $uibModal) {
                    var self = this;
                    self.logIn = function () {
                        var modalInstance = $uibModal.open({
                            animation: true,
                            templateUrl: '/views/auth/modal.html',
                            controller: 'content.Auth.ModalController',
                            size: 'xs',
                            windowClass: 'login-form'
                        });
                        modalInstance.result.then(function () {
                            //
                        }, function () {
                            //closed
                        });
                    };

                    self.logOut = function () {
                        return 'logout ok';
                    };
                    self.register = function () {
                        return 'register ok';
                    };
                    return self;
                }
            ]
        );
    }
);