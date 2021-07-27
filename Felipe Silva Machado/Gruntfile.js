module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        files: {
          "style/cadastro.css": "style/cadastro.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['**/*.less'],
        tasks: ['less']
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};