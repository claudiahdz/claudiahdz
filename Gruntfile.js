/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    concat: {
      js: {
        src: ['js/**/*.js'],
        dest: 'dist/js/main.min.js'
      },
      css:  {
        src: ['css/**/*.css'],
        dest: 'dist/css/main.min.css'
      }
    },
    uglify: {
      dist: {
        src: 'dist/js/main.min.js',
        dest: 'dist/js/main.min.js'
      }
    },
    cssmin: {
      dist: {
        src: ['dist/css/main.min.css'],
        dest: 'dist/css/main.min.css'
      }
    },
    gruntfile: {
        src: 'Gruntfile.js'
    }
});

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Default task.
  grunt.registerTask('build', ['concat', 'uglify', 'cssmin']);

};
