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
                '$scope', 'dataService', '$interval',
                function ($scope, dataService, $interval) {
                    var displayMessage = function (message, type, delay) {
                        if (type === 'success') {
                            $scope.successMessage = message;
                        } else {
                            $scope.errorMessage = message;
                        }
                        $interval(function () {
                        }, delay, 1).then(function () {
                            delete $scope.successMessage || $scope.errorMessage;
                        });
                    };
                    $scope.getItems = function () {
                        return dataService.getAllItems.async().then(function (loadData) {
                            console.log(loadData);
                            $scope.items = loadData;
                        });
                    }
                    $scope.addAnItem = function () {
                        dataService.addAnItem.async($scope.item).then(
                            function (loadedData) {
                                if (loadedData.status.toLowerCase() === 'ok') {
                                    displayMessage('successfully saved', 'success', 4000);
                                } else {
                                    displayMessage('sorry, but not saved', 'error', 4000);
                                }
                            }
                        );
                    };
                    $scope.delete = function (item) {
                        dataService.deleteAnItem.async(item._id).then(
                            function (loadedData) {
                                if(loadedData&&loadedData.status.toLowerCase()==='ok'){
                                    item.deleted = true;
                                }else{
                                    alert('Error');
                                }
                            }
                        );
                    };
                }
            ]
        );
    }
);