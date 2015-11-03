/**
 * Created by artem on 12/5/14.
 */
define(
    ['../module'],
    function (module) {
        module.service('content.Common.CRUDService', [
                '$http',
                function ($http) {
                    return {
                        list: function (url) {
                            return $http.get(url).then(
                                function (response) {
                                    return response.data;
                                });
                        },
                        get: function (url, id) {
                            return $http.get(url + '/' + id).then(
                                function (response) {
                                    return response.data;
                                });
                        },
                        delete: function (url, id) {
                            return $http.delete(url + '/' + id).then(
                                function (response) {
                                    return response.data;
                                });
                        },
                        post: function (url, data) {
                            return $http.post(url, data).then(
                                function (response) {
                                    return response.data;
                                }
                            );
                        },
                        update: function (url, data) {
                            return $http.put(url, data).then(
                                function (response) {
                                    return response.data;
                                }
                            );
                        }
                    };
                }]
        );
    }
);