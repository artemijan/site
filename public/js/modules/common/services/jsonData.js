/**
 * Created by artem on 12/5/14.
 */
define(
    ['../module'],
    function (services) {
        services.factory('dataService', [
                '$http',
                function ($http) {
                    var myService = {
                        async: function () {
                            // $http returns a promise, which has a then function, which also returns a promise
                            var promise = $http.get('/getAllItems').then(
                                function (response) {
                                    return response.data;
                                });
                            // Return the promise to the controller
                            return promise;
                        }
                    };
                    return myService;
                }]
        );
    }
);