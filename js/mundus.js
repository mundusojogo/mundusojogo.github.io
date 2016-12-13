$(function() {
  $('#infiltrados').hide();
  $('#remotos').hide();
  $('#sede').hide();
});

$('#mostrar_infiltrados').on('click', function(e){
  $('#infiltrados').fadeToggle(500);
});

$('#mostrar_remotos').on('click', function(e){
  $('#remotos').fadeToggle(500);
});
$('#mostrar_sede').on('click', function(e){
  $('#sede').fadeToggle(500);
});

/*scroll*/

var $doc = $('html, body');
$('.scroll').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});