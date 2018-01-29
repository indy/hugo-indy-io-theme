// Js files to inject in `layouts/partials/script.html`
var indyioJsFilesToInject = [
  'indyio.js'
];

// Css files to inject in `layouts/partials/head.html`
var indyioCssFilesToInject = [
  'indyio.css'
];

module.exports.indyioCssFilesToInject = indyioCssFilesToInject.map(function(path) {
  return 'static/css/' + path;
});

module.exports.indyioJsFilesToInject = indyioJsFilesToInject.map(function(path) {
  return 'static/js/' + path;
});
