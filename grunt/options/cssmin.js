module.exports = {
  minify: {
    expand: true,
    cwd:  '<%= source %>/css',
    dest: '<%= production %>/css',
    src: ['*.css', '!*.min.css'],
    ext: '.css'
  }
};
