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
                    optimize: 'none',
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
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> Last modified: <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                compress: {
                    drop_console: true, //删除console语句
                },
                preserveComments: false, //删除注释
            },
            dist: {
                expand: true,
                cwd: 'dist/js/',
                src: '**/*.js',
                dest: 'dist/js/',
            }
        },

        cssmin: {
            options: {
                banner: '/*! <%= pkg.name %> Last modified: <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                keepSpecialComments: 0
            },
            files: {
                expand: true,
                cwd: 'dist/',
                src: '**/*.css',
                dest: 'dist/'
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['clean', 'requirejs', 'less', 'uglify', 'cssmin']);
};