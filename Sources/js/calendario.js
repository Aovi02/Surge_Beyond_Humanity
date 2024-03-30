$(document).ready(function() {
    $('li').click(function() {
      var day = $(this).text();
      var eventDetails = "Details for Day " + day; // Example event details
      $('#event-details header h2').text(eventDetails);
      $('#event-details').show();
    });
  
    $('#close').click(function() {
      $('#event-details').hide();
    });
  });