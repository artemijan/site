/**
 * Created by artem on 12/3/14.
 */
/*global module,require*/
module.exports = function (grunt) {
    var _ = require('lodash');
    var config = {};
    var endpointConfig = require('./endpoint/config')(grunt);
    var publicConfig = require('./public/config')(grunt);
    _.merge(config, endpointConfig, publicConfig);
    //merge all configs
    grunt.initConfig(config);
    /**
     * Load tasks
     */
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('build', function () {
        grunt.task.run([
            'server-build',
            'public-build'
        ]);
    });
};