/**
 * Created by artem on 12/5/14.
 */
define(
    ['../module'],
    function(module){
        'use strict';
        module.directive('menu',function(){
            return {
                restrict:'E',
                templateUrl:"/views/templates/menu.html"
            }
        });
    }
);