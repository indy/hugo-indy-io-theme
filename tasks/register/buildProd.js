module.exports = function(grunt) {
  // Build (environment : production)
  grunt.registerTask('buildProd', [
    'clean:build',
    'syncAssets',
    'replace:cssIndyio',
    'concat',
    'cssmin',
    'uglify',
    'linkAssetsProd'
  ]);
};
