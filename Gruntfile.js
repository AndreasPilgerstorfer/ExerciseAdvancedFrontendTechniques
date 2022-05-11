module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'public/main.min.js': ['assets/js/animations.js']
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'public/main.min.css': ['public/main.css']
                }
            }
        },
        watch: {
            css: {
                files: 'assets/scss/*.scss',
                tasks: ['sass', 'cssmin'],
                options: {
                    livereload: true,
                },
            },
            scripts: {
                files: 'assets/*/.js',
                tasks: ['uglify'],
            },
        },
        sass: {                                // Task
            dist: {                            // Target
                options: {                     // Target options
                    style: 'expanded'
                },
                files: {                                              // Dictionary of files
                    'public/main.css': 'assets/scss/main.scss',       // 'destination': 'source'
                }
            }
        },
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                    {
                        expand: true,
                        cwd: 'assets/img/',
                        src: ['**/*.png'],
                        dest: 'public/img/',
                        ext: '.png'
                    }
                ]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'assets/img/',
                        src: ['**/*.jpg','**/*.jpeg'],
                        dest: 'public/img/',
                        ext: '.jpg'
                    }
                ]
            }
        }
    });

    // Hier definert man die Tasks, dass man sie auch benutzen kann
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'imagemin', 'htmlmin']);       // wird bei grunt ausgeführt
};