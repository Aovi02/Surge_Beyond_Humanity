$(document).ready(function() {
    //Si nos pasamos de este scroll aparece el botón
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#back-to-top').fadeIn();
      } else {
        $('#back-to-top').fadeOut();
      }
    });
    //El efecto del botón es subir arriba
    $('#back-to-top').click(function() {
      $('html, body').animate({scrollTop: 0}, 'slow');
    });
  });