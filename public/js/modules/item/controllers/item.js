/**
 * Created by artem on 12/5/14.
 */
define(
    ['../module'],
    function (module) {
        'use strict';
        module.controller(
            "content.Item.itemController",
            [
                '$scope','dataService',
                function ($scope, dataService) {
                    dataService.async().then(function(loadData){
                        $scope.items = loadData;
                    });
                }
            ]
        );
    }
);