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
                        get: {
                            async: function (what) {
                                // return promise
                                return get('/getAllItems/'+what);
                            }
                        },
                        addAnItem: {
                            async: function (item,what) {
                                return postJSON(item, '/addItem/'+what);
                            }
                        },
                        deleteAnItem:{
                            async:function(id,what){
                                return get('/delete/'+what+'/'+id);
                            }
                        },
                        getCategories:{
                            async:function(){
                                return get('/getCategories');
                            }
                        }
                    };
                }]
        );
        services.factory('addItem')
    }
);