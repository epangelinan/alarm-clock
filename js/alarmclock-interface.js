//var Alarm = require('./../js/alarmclock.js').alarmModule;

$(document).ready(function() {
  $('#alarm-clock-form').submit(function(event) {
    event.preventDefault();
    var hour = parseInt($('#hour').val());
    var minute = parseInt($('#minute').val());
    console.log(minute);

    function alarm() {
      var currentHour = parseInt(moment().format('H'));
      var currentMinute = parseInt(moment().format('mm'));

      if ((hour === currentHour) && (minute === currentMinute)) {
        console.log("IT's TIME!!!");
      }
    }
    setInterval(alarm, 1000);
  });
});
