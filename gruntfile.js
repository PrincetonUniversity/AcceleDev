'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/main.css' : 'components/sass/main.scss'
                }
            }
        },
        watch: {
          files: ['components/**/*.scss', '*.html'],
          tasks: ['sass'],
          options: {
            spawn: false
          },
        }
    });
    grunt.registerTask('default',['watch']);
  };
