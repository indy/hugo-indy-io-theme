module.exports = function(grunt) {
  grunt.config.set('sass', {
    // Compile `indyio.scss` file into `indyio.css`
    dev: {
      options: {
        sourceMap: false
      },
      files: {
        'static/css/indyio.css': 'src/scss/indyio.scss'
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
};
