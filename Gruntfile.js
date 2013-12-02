module.exports = function(grunt) {

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

        watch: {
            all: {
                files: ['app/**/*'],
                tasks: ['default'],
                options: {
                    spawn: false
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
                options: { optimizationLevel: 4 },
                files: [{
                    expand: true,
                    cwd: '<%= distFolder %>/<%= imgFolder %>/',
                    src: '**/**/*.{png,jpg}',
                    dest: '<%= distFolder %>/<%= imgFolder %>/'
                }]
            }
        },

    
        handlebars: {
            compile: {
                files: {
                    "dist/aside.js": "app/aside.hbs",
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-replace');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.loadNpmTasks('grunt-data-uri');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', [
        'clean',
        'copy',
        'concat',
        'replace',
//        'jshint',
//        'jasmine',
        'compass',
        // 'handlebars',
//        'imagemin',
//        'uglify',
//        'dataUri',
        'watch'
    ]);
};