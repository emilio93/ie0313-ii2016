$(document).ready(function() {
  loadInicio();
  loadTrabajos();
  loadTareas();
  loadMaterial();
  loadLicencia();
  showPage();

  $('nav>ul>a').click(function(){
    setTimeout(function() {window.scrollTo(0, 0);}, 1);
  });

  $(window).on('hashchange',function(){
    showPage(window.location.hash.substr(1));
  });

  function loadLicencia() {
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
