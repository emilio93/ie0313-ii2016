$(document).ready(function() {
  loadHome();
  showPage();

  $(window).on('hashchange',function(){
    showPage(window.location.hash.substr(1));
  });

  function loadHome() {
    $('#readme').html('<p class="text-center"><i class="fa fa-spinner fa-spin"></i></span>');
    $.ajax('https://raw.githubusercontent.com/emilio93/ie0313-ii2016/master/readme.md', {})
    .then(function(data) {$('#readme').html(marked(data));})
    .fail(function() {$('#readme').html(marked('## Inicio\nNo se pudo cargar contenido.'));})
  }

  function showPage(id) {
    if (typeof id === 'undefined') {
      var hash = window.location.hash;
      hash = hash.length>1? hash.substr(1): 'inicio';
      return showPage(hash);
    }
    var pageSet = false;
    $('section').each(function(index) {
      if ($(this).attr('id') === id) {
        $(this).show();
        pageSet = true;
      } else {
        $(this).hide();
      }
    });
    if (!pageSet) {
      $('#errorPage').show();
    }
  }
});
