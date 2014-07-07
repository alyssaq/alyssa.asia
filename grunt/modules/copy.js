module.exports = {
  clientfiles: {
    files: [{
      expand: true,
      cwd: '<%= source %>/',
      dest: '<%= production %>/',
      src: [
        //'js/*.js',
        'css/**/*.{eot,svg,ttf,woff,min.css}',
        'img/**/*.{jpg,jpeg,gif,png,ico,webp}'
      ]
    }]
  },
  serverfiles: {
    files: [{
      expand: true,
      dest: '<%= production %>/',
      src: [
        'app.yaml',
        'webserver.py'
      ]
    }]
  }
};
