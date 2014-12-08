/**
 * Created by artem on 12/5/14.
 */
define(
    ['../module'],
    function (services) {
        services.factory('dataService', [
                '$http',
                function ($http) {
                    var get = function (url) {
                            return $http.get(url).then(
                                function (response) {
                                    return response.data;
                                });
                        },
                        postJSON = function (data, url) {
                            return $http.post(url, data).then(
                                function (response) {
                                    return response.data;
                                }
                            );
                        };
                    return {
                        getAllItems: {
                            async: function () {
                                // return promise
                                return get('/getAllItems');
                            }
                        },
                        addAnItem: {
                            async: function (data) {
                                return postJSON(data, '/addItem');
                            }
                        }
                    };
                }]
        );
        services.factory('addItem')
    }
);