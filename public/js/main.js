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
        'angular': '../libs/angular/angular',
        'angular-route': '../libs/angular-route/angular-route',
        'domReady': '../libs/requirejs-domready/domReady'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        }
    }
});
require(['./bootstrap'],function(){});