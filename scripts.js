$(document).ready(function() {
  loadInicio();
  loadTrabajos();
  loadTareas();
  loadMaterial();
  showPage();

  $('nav>ul>a').click(function(){
    setTimeout(function() {window.scrollTo(0, 0);}, 1);
  });

  $(window).on('hashchange',function(){
    showPage(window.location.hash.substr(1));
  });

  function loadInicio() {
    $('#readme').html('<p class="text-center"><i class="fa fa-spinner fa-spin"></i></span>');
    $.ajax('https://raw.githubusercontent.com/emilio93/ie0313-ii2016/master/readme.md', {})
    .then(function(data) {$('#readme').html(marked(data));})
    .fail(function() {$('#readme').html(marked('## Inicio\nNo se pudo cargar contenido.'));})
  }

  function loadTrabajos() {
    $('#readme-trabajos').html('<p class="text-center"><i class="fa fa-spinner fa-spin"></i></span>');
    $.ajax('https://raw.githubusercontent.com/emilio93/ie0313-ii2016/master/trabajos/readme.md', {})
    .then(function(data) {$('#readme-trabajos').html(marked(data));})
    .fail(function() {$('#readme-trabajos').html(marked('## Trabajos\nNo se pudo cargar contenido.'));})
  }

  function loadTareas() {
    $('#readme-tareas').html('<p class="text-center"><i class="fa fa-spinner fa-spin"></i></span>');
    $.ajax('https://raw.githubusercontent.com/emilio93/ie0313-ii2016/master/tareas/readme.md', {})
    .then(function(data) {$('#readme-tareas').html(marked(data));})
    .fail(function() {$('#readme-tareas').html(marked('## Tareas\nNo se pudo cargar contenido.'));})
  }

  function loadMaterial() {
    $('#readme-material').html('<p class="text-center"><i class="fa fa-spinner fa-spin"></i></span>');
    $.ajax('https://raw.githubusercontent.com/emilio93/ie0313-ii2016/master/material/readme.md', {})
    .then(function(data) {$('#readme-material').html(marked(data));})
    .fail(function() {$('#readme-material').html(marked('## Material\nNo se pudo cargar contenido.'));})
  }

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
