module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    jshint: {
      all: {
        options: {
          node: true,
          mocha: true,
        },
        src: ['./*.js', './test/**/*.js']
      }
    },

    jscs: {
      all: {
        src: ['./*.js', './test/**/*.js']
      }
    },

    simplemocha: {
      all: {
        src: ['./test/**/*_test.js']
      }
    }
  });

  grunt.registerTask('style', ['jscs']);
  grunt.registerTask('default', ['jshint', 'simplemocha']);

};
