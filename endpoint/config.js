/**
 * Created by artem on 11/2/15.
 */
/*global module,require*/
module.exports = function (grunt, config) {
    grunt.registerTask('server-build', function () {
        grunt.task.run([
            'jshint:server'
        ]);
    });
    return {
        "jshint": {
            server: {
                files: [
                    {
                        src: [
                            './endpoint/js-lib/**.js'
                        ]
                    }
                ],
                options: {
                    jshintrc: './endpoint/.jshintrc'
                }
            }
        }
    };
};