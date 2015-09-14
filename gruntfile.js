module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/main.css' : 'components/sass/main.scss'
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default',['sass']);
}
