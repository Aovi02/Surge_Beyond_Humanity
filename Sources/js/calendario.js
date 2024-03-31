$(document).ready(function() {
    var events;
    $.getJSON("../json/calendario/eventos.json", function(data) {
      events = data;
    });

    $('li').click(function() {
      var day = $(this).text();
      var eventFound = false;

      //Comprobar si el día coincide con algún día válido del JSON (es decir, tiene evento)
      for (var i = 0; i < events.length; i++) {
        if (events[i].day == day) {
          var eventHeader = events[i].name;
          $('#event-details header h2').text(eventHeader);
          $('#event-details .content').text(events[i].description);
          $('#event-details').show();
          eventFound = true;
          break;
        }
      }
      //Esconder caja si no tiene evento
      if (!eventFound) {
        $('#event-details').hide();
      }
    });
  
    $('#close').click(function() {
      $('#event-details').hide();
    });
  });