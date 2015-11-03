/**
 * Created by artem on 11/2/15.
 */
define(
    ['../module', '../dto'],
    function (module, dto) {
        'use strict';
        module.controller(
            "content.Auth.ModalController",
            [
                '$scope',
                '$uibModalInstance',
                'content.Auth.JSONService',
                function ($scope, $uibModalInstance, JSONService) {
                    $scope.user = {};
                    var vm = this;
                    vm.loginForm = {
                        schema: dto.login.schema,
                        options: dto.options,
                        form: [
                            {
                                key: 'name',
                                type: 'input',
                                placeholder: 'username'
                            },
                            {
                                key: 'password',
                                type: 'password',
                                placeholder: "password"
                            }
                        ]
                    };
                    vm.regForm = angular.copy(vm.loginForm);
                    vm.regForm.schema = dto.signUp.schema;
                    var email = {
                        key: 'email',
                        type: 'email',
                        placeholder: 'Email address'
                    };
                    //add email
                    vm.regForm.form.splice(1, 0, email);
                    $scope.signIn = function () {
                        JSONService.logIn($scope.user)
                            .then(function (userPosted) {
                                $uibModalInstance.close(userPosted.status);
                            });
                    };
                    $scope.signUp = function () {
                        JSONService.register($scope.user)
                            .then(function (userPosted) {
                                $uibModalInstance.close(userPosted._id);
                            });
                    };
                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                }
            ]
        );
    }
);