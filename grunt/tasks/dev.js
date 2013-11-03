module.exports = function (grunt) {
  grunt.registerTask('dev', [
    'htmlmin',
    'cssmin',
    'jshint',
    'copy',
    'watch'
  ]);
};
