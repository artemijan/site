/**
 * Created by artem on 12/2/14.
 */
/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({
    paths: {
        'angular': '../bower_components/angular/angular',
        'angular-route': '../bower_components/angular-route/angular-route',
        'domReady': '../bower_components/requirejs-domready/domReady',
        'angular-animate': '../bower_components/angular-animate/angular-animate',
        'ui.bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap',
        'ui.bootstrap.tpls': '../bower_components/angular-bootstrap/ui-bootstrap-tpls'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-route': {
            deps: ['angular']
        },
        'ui.bootstrap': {
            deps: ['angular']
        },
        'ui.bootstrap.tpls': {
            deps: ['ui.bootstrap']
        }
    }
});
require(['./bootstrap'], function () {
});