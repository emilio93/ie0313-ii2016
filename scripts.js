$(document).ready(function() {
  loadHome();
  loadLisence();
  showPage();

  $('nav>ul>a').click(function(){
    setTimeout(function() {window.scrollTo(0, 0);}, 1);
  });

  $(window).on('hashchange',function(){
    showPage(window.location.hash.substr(1));
  });


  function loadHome() {
    $('#readme').html('<p class="text-center"><i class="fa fa-spinner fa-spin"></i></span>');
    $.ajax('https://raw.githubusercontent.com/emilio93/ie0313-ii2016/master/readme.md', {})
    .then(function(data) {$('#readme').html(marked(data));})
    .fail(function() {$('#readme').html(marked('## Inicio\nNo se pudo cargar contenido.'));})
  }

  function loadLisence() {
    $('#license').html('<p class="text-center"><i class="fa fa-spinner fa-spin"></i></span>');
    $.ajax('https://raw.githubusercontent.com/emilio93/ie0313-ii2016/master/LICENSE', {})
    .then(function(data) {$('#license').html('<pre>' + data + '</pre>');})
    .fail(function() {$('#license').html(marked('## Licencia\nNo se pudo cargar la licencia.'));})
  }

  function showPage(id) {
    if (typeof id === 'undefined' || id.length <= 1) {
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
