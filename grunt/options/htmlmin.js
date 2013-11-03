module.exports = {
  options: {
    removeComments: true,
    removeCommentsFromCDATA: true,
    removeCDATASectionsFromCDATA: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeEmptyElements: false
  },
  templates: {
    files: [{
      expand: true,
      cwd: '<%= source %>/',
      dest: '<%= production %>/',
      src: [
        'templates/*.html'
      ]
    }]
  }
};

