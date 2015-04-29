module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

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

    simplemocha: {
      all: {
        src: ['./test/**/*_test.js']
      }
    },

    watch: {
      files: ['./*.js', './test/**/*_test.js'],
      tasks: ['simplemocha', 'jshint']
    }

  });


  grunt.registerTask('test', ['simplemocha']);
  grunt.registerTask('default', ['jshint', 'simplemocha']);

};





