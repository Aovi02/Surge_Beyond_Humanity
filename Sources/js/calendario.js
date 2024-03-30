$(document).ready(function() {
    var events;
    $.getJSON("../json/calendario/eventos.json", function(data) {
      events = data;
    });

    $('li').click(function() {
      var day = $(this).text();
      var eventFound = false;

      // Check if there is an event on the clicked day
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
      // If no event found, hide event details box
      if (!eventFound) {
        $('#event-details').hide();
      }
    });
  
    $('#close').click(function() {
      $('#event-details').hide();
    });
  });