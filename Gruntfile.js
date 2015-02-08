/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    concat: {
      js: {
        src: ['js/parallax-plugin.js','js/responsive.js', 'js/app.js'],
        dest: 'dist/main.min.js'
      },
      css:  {
        src: ['css/responsive-queries.css', 'css/animations.css', 'css/style.css'],
        dest: 'dist/main.min.css'
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/main.min.js': 'dist/main.min.js'
        }
      }
    },
    cssmin: {
      dist: {
        src: ['dist/main.min.css'],
        dest: 'dist/main.min.css'
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
  grunt.registerTask('build', ['concat', 'uglify','cssmin']);

};
