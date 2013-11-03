module.exports = {
  production: {
    files: [{
      expand: true,
      cwd: '<%= source %>/',
      dest: '<%= production %>/',
      src: [
        //'js/*.js',
        'css/**/*.{eot,svg,ttf,woff}',
        'img/**/*.{jpg,jpeg,gif,png,ico,webp}'
      ]
    }]
  }
};
