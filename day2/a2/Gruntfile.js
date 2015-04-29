module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: {
        options: {
          node: true,
          mocha: true,
        },
        src:
      }
      files: ['./*.js', './test/**/*_test.js']
    },
    simplemocha: {
      files: ['./test/**/*_test.js']
    },
    watch: {
      files: ['./*.js', './test/**/*_test.js'],
      tasks: ['simplemocha', 'jshint']
    }
  });


  // Load the plugin that provides the jshint task
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Load the plugin that provides the mocha task
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['simplemocha']);

  // Default tasks
  grunt.registerTask('default', ['jshint', 'simplemocha']);

};





