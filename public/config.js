/**
 * Created by artem on 11/2/15.
 */
/*global module, require*/
module.exports = function (grunt) {
    grunt.registerTask('public-build', function () {
        var exec = require('child_process').exec;
        var cb = this.async();
        /**
         * Bower dependencies
         */
        exec('bower install', {cwd: './public'}, function (err, stdout, stderr) {
            console.log(stdout);
            cb();
        });
        grunt.task.run([
            'less:all'
        ]);
    });
    return {
        less: {
            all: {
                options: {
                    compress: false
                },
                files: {
                    './public/dist/main.css': './public/less/main.less'
                }
            }
        },
        "jshint": {
            public: {
                files: [
                    {
                        src: [
                            './public/js/**.js'
                        ]
                    }
                ],
                options: {
                    jshintrc: './public/js/.jshintrc'
                }
            }
        }
    };
};