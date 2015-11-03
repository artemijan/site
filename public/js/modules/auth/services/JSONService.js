/**
 * Created by artem on 11/3/15.
 */
define(
    ['../module'],
    function (module) {
        'use strict';
        module.service(
            "content.Auth.JSONService",
            [
                'content.Common.CRUDService',
                function (CRUDService) {
                    var self = this;
                    self.logIn = function (user) {
                        return CRUDService.post('/login', user);
                    };

                    self.logOut = function () {

                    };
                    self.register = function (user) {
                        return CRUDService.post('/user/add', user);
                    };
                    return self;
                }
            ]
        );
    }
);