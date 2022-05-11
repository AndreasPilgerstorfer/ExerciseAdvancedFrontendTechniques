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
        }
    });

    // Hier definert man die Tasks, dass man sie auch benutzen kann
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);       // wird bei nur grunt ausgeführt
};