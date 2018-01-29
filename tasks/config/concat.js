module.exports = function(grunt) {
  grunt.config.set('concat', {
    // Concat all javascript file into `indyio.js`
    devJs: {
      src: ['src/js/**/*.js'],
      dest: 'static/js/indyio.js',
      options: {
        separator: ';'
      }
    },
    // Concat all stylesheets file into `style.css`
    prodCss: {
      src: ['static/css/*.css'],
      dest: 'static/css/style.css'
    },
    // Concat all javascript file in `script.js`
    prodJs: {
      src: require('../pipeline').indyioJsFilesToInject,
      dest: 'static/js/script.js',
      options: {
        separator: ';'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};
