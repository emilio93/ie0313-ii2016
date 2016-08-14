$(document).ready(function() {
  console.log('document ready');
  loadHome();

  function loadHome() {
    $.ajax('https://raw.githubusercontent.com/emilio93/ie0313-ii2016/master/readme.md', {})
    .then(function(data) { var elem = $('#readme').html(marked(data));});
  }
});
