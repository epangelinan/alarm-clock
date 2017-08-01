var Alarm = require('./../js/alarmclock.js').alarmModule;

$(document).ready(function() {
  $('#alarm-clock-form').submit(function(event) {
    event.preventDefault();
    var time = $('#alarm-clock-form').val();
    alert(time);
  });
});
