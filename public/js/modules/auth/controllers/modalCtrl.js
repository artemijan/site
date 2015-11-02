/**
 * Created by artem on 11/2/15.
 */
define(
    ['../module'],
    function (module) {
        'use strict';
        module.controller(
            "content.Auth.ModalController",
            [
                '$scope',
                '$uibModalInstance',
                function ($scope, $uibModalInstance) {
                    $scope.user = {};
                    $scope.ok = function () {
                        $uibModalInstance.close('user');
                    };

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                }
            ]
        );
    }
);