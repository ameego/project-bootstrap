module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        appFolder: 'app',
        distFolder: 'dist',
        imgFolder: 'img',
        fontFolder: 'fonts',

        clean: {
            dist: {
                src: "<%= distFolder %>/"
            },
            styleguide: {
                src: "styleguide/"
            }
        },

        concat: {
            dist: {
                src: '<%= appFolder %>/scripts/**/*.js',
                dest: '<%= distFolder %>/scripts/scripts.js'
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
                        cwd: '<%= appFolder %>/',
                        src: ['*.html'],
                        dest: '<%= distFolder %>/'
                    },
                    {
                        expand: true,
                        cwd: '<%= appFolder %>/',
                        src: ['<%= imgFolder %>/**/*', '<%= fontFolder %>/**/*'],
                        dest: '<%= distFolder %>/'
                    },
                    {
                        expand: true,
                        cwd: '<%= fontFolder %>/',
                        src: ['**/*'],
                        dest: '<%= distFolder %>/'
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
                src: ['<%= distFolder %>/styles/*.css'],
                dest: '<%= distFolder %>/styles/',
                options: {
                    target: ['<%= distFolder %>/<%= imgFolder %>/**/embeded/*.*'],
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
                    cwd: '<%= distFolder %>/<%= imgFolder %>/',
                    src: '**/**/*.{png,jpg}',
                    dest: '<%= distFolder %>/<%= imgFolder %>/'
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
            all : '<%= appFolder %>/**/*.js'
        },

        jasmine: {
            common: {
                src:[
                    '<%= appFolder %>/scripts/test.js'
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