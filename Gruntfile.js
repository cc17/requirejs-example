module.exports = function(grunt) {
    var arrModules = require('./grunt/module-config.js');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            dist: ['dist']
        },

        requirejs: {
            build: {
                options: {
                    appDir: './dev',
                    baseUrl: 'js',
                    dir: './dist',
                    optimizeCss: 'standard',
                    // optimize: 'none',
                    mainConfigFile: 'dev/js/requirejs-config.js',
                    modules: arrModules,
                }
            }
        },

        less: {
            dev: {
                files: {
                    'dev/css/style.css': 'dev/less/style.less'
                }
            },
            dist: {
                options: {
                    compress: true
                },
                files: {
                    'dist/css/style.css': 'dev/less/style.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['clean', 'requirejs', 'less']);
};