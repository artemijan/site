/**
 * Created by artem on 12/5/14.
 * User: TEMA
 * Date: 08.08.14
 * Time: 17:46
 */
define([

    'require',
    'domReady',
    'angular',
    'routes',
    './page-content/content'
], function (require,domReady, angular) {
    'use strict';

    /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
     */
    domReady( function () {
            angular.bootstrap(document, ['content']);
        }
    );
});