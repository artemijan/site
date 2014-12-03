/**
 * Created by artem on 12/3/14.
 */
/*global module*/
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                options: {
                    targetDir: "public/libs"
                }
            }
        },
        "jshint": {
            main: {
                files: [
                    {
                        src: [
                            'server.js'
                        ]
                    }
                ],
                options: {
                    jshintrc: '.jshintrc'
                }
            },
            libs: {
                files: [
                    {
                        src: [
                            './js-lib/**.js'
                        ]
                    }
                ],
                options: {
                    jshintrc: './js-lib/.jshintrc'
                }
            },
            clientSide: {
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
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.registerTask('lint', ['jshint:main', 'jshint:libs', 'jshint:clientSide']);
    grunt.registerTask('build', function () {
        grunt.task.run([
            'lint',
            'copy:libs'
        ]);
    });
};