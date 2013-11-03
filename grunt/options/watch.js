module.exports = {
  scripts: {
    files: [
      'Gruntfile.js',
      'package.json',
      '<%= source %>/js/*.js',
    ],
    tasks: [
      'jshint',
      'copy:clientfiles'
    ]
  },
  css: {
    files: [
      '<%= source %>/css/*.css'
    ],
    tasks: [
      'cssmin'
    ]
  },
  html: {
    files: [
      '<%= source %>/templates/*.html'
    ],
    tasks: [
      'htmlmin'
    ]
  },
  serverfiles: {
    files: [
      'webserver.py',
    ],
    tasks: [
      'copy:serverfiles'
    ]
  },
};

