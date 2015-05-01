module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    jshint: {

    },

    jscs: {

    },

    simplemocha: {

    }
  });

  grunt.registerTask('default', ['jshint', 'simplemocha']);

};
