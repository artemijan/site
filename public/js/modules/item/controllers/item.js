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
                    $scope.get = function (what) {
                        return dataService.get.async(what).then(function (loadedData) {
                            $scope[what] = loadedData;
                        });
                    };
                    $scope.add = function (item, what) {
                        dataService.addAnItem.async(item, what).then(function (loadedData) {
                            if (loadedData.status.toLowerCase() === 'ok') {
                                if ($scope.categories) {
                                    $scope.categories.push(item);
                                }
                                displayMessage('successfully saved', 'success', 4000);
                            } else {
                                displayMessage('sorry, but not saved', 'error', 4000);
                            }
                        });
                    };
                    $scope.delete = function (itemToDelete, what) {
                        dataService.deleteAnItem.async(itemToDelete._id, what).then(
                            function (loadedData) {
                                if (loadedData && loadedData.status.toLowerCase() === 'ok') {
                                    itemToDelete.deleted = true;
                                } else {
                                    alert('Error');
                                }
                            }
                        );
                    };
                    $scope.selected = function (item) {
                        if (!$scope.product) {
                            $scope.product = {};
                            $scope.product.categories = [];
                        }
                        if (item.cssClass && item.cssClass === 'active') {
                            item.cssClass = '';
                        } else {
                            item.cssClass = 'active';
                        }
                    };
                }
            ]
        );
    }
);