/**
 * Created by artem on 12/5/14.
 */

define([
        'angular',
        'angular-route',
        'modules/item/index',
        'modules/common/index'
    ],
    function (angular) {
        return angular.module('content', [
            'ngRoute',
            'content.Item',
            'content.Common'
        ]);
    }
);