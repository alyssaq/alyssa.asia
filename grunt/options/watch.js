module.exports = {
  scripts: {
    files: [
      'Gruntfile.js',
      'package.json',
      '<%= source %>/js/*.js',
    ],
    tasks: [
      'jshint',
      'copy'
    ]
  },
  css: {
    files: [
      '<%= source %>/css/*.css'
    ],
    tasks: [
      'copy'
    ]
  },
  html: {
    files: [
      '<%= source %>/templates/*.html'
    ],
    tasks: [
      'htmlmin'
    ]
  }
};

