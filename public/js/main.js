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
        'jquery': '../bower_components/jquery/dist/jquery',
        'twitter-bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
        'angular-route': '../bower_components/angular-route/angular-route',
        'domReady': '../bower_components/requirejs-domready/domReady',
        'angular-animate': '../bower_components/angular-animate/angular-animate',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
        'ui.bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap',
        'ui.bootstrap.tpls': '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        'tv4': '../bower_components/tv4/tv4',
        'objectpath': '../bower_components/objectpath/lib/ObjectPath',
        'angular-schema-form': '../bower_components/angular-schema-form/dist/schema-form',
        'angular-sf-bootstrap-decorator': '../bower_components/angular-schema-form-bootstrap/bootstrap-decorator'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'ui.bootstrap': {
            deps: ['angular']
        },
        'ui.bootstrap.tpls': {
            deps: ['ui.bootstrap']
        },
        'twitter-bootstrap': {
            deps: ['jquery']
        },
        'tv4': {
            deps: [],
            exports: 'tv4'
        },
        'objectpath': {
            deps: ['angular']
        },
        'angular-schema-form': {
            deps: ['angular', 'angular-sanitize', 'tv4', 'objectpath', 'twitter-bootstrap']
        },
        'angular-sf-bootstrap-decorator': {
            deps: ['angular-schema-form', 'twitter-bootstrap']
        }
    }
});
require(['./bootstrap'], function () {
});