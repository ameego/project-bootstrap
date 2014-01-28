module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        dirs: {
            app: 'app',
            dist: 'dist',
            img: 'img',
            font: 'fonts'
        },

        clean: {
            dist: {
                src: "<%= dirs.dist %>/"
            },
            styleguide: {
                src: "styleguide/"
            }
        },

        concat: {
            dist: {
                src: '<%= dirs.app %>/scripts/**/*.js',
                dest: '<%= dirs.dist %>/scripts/scripts.js'
            }
        },

        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },

        copy: {
            dist:{
                files: [
                    {
                        expand: true,
                        cwd: '<%= dirs.app %>/',
                        src: ['*.html'],
                        dest: '<%= dirs.dist %>/'
                    },
                    {
                        expand: true,
                        cwd: '<%= dirs.app %>/',
                        src: ['<%= dirs.img %>/**/*', '<%= dirs.font %>/**/*'],
                        dest: '<%= dirs.dist %>/'
                    },
                    {
                        expand: true,
                        cwd: '<%= dirs.font %>/',
                        src: ['**/*'],
                        dest: '<%= dirs.dist %>/'
                    }
                ]
            }
        },

        replace : {
            css : {
                options : {
                    variables : {
                        'cssName' : 'main'
                    },
                    prefix : '@@'
                },
                files : {
                    'dist/index.html' : [ 'dist/index.html' ]
                }
            }
        },

        dataUri: {
            dist: {
                src: ['<%= dirs.dist %>/styles/*.css'],
                dest: '<%= dirs.dist %>/styles/',
                options: {
                    target: ['<%= dirs.dist %>/<%= dirs.img %>/**/embeded/*.*'],
                    fixDirLevel: true
                }
            }
        },

        imagemin: {
            img: {
                options: { 
                    optimizationLevel: 4 
                },
                files: [{
                    expand: true,
                    cwd: '<%= dirs.dist %>/<%= dirs.img %>/',
                    src: '**/**/*.{png,jpg}',
                    dest: '<%= dirs.dist %>/<%= dirs.img %>/'
                }]
            }
        },

        jshint : {
            options : {
                curly : true,
                eqeqeq : true,
                immed : true,
                latedef : true,
                newcap : true,
                noarg : true,
                sub : true,
                undef : true,
                boss : true,
                eqnull : true
            },
            all : '<%= dirs.app %>/**/*.js'
        },

        jasmine: {
            common: {
                src:[
                    '<%= dirs.app %>/scripts/test.js'
                ],
                options: {
                    specs: 'test/spec/*.js'
                }
            }
        },

        uglify: {
            dist: {
                src: '<%=concat.dist.dest%>',
                dest: '<%=concat.dist.dest%>'
            }
        }, 

        watch: {
            all: {
                files: ['app/**/*'],
                tasks: ['default'],
                options: {
                    spawn: false
                }
            }
        }

    });
   
    //
    // Grunt profiles
    //
    grunt.registerTask('default', [
        'clean',
        'copy',
        'concat',
        'replace',
        'jshint',
        'compass',
        'imagemin',
        'dataUri',
       // 'jasmine'
       // 'watch'       
    ]);
};