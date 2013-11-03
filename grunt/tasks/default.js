module.exports = function (grunt) {
	grunt.registerTask('default', [
    'htmlmin',
    'cssmin',
		'jshint',
    'copy:production'
	]);
};
