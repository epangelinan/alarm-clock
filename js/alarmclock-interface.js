//var Alarm = require('./../js/alarmclock.js').alarmModule;

$(document).ready(function() {

  $('#alarm-clock-form').submit(function(event) {
    event.preventDefault();
    var hour = parseInt($('#set-hour').val());
    var minute = parseInt($('#set-minute').val());
    console.log(minute);

    function alarm() {
      var currentHour = parseInt(moment().format('H'));
      var currentMinute = parseInt(moment().format('mm'));

      if ((hour == currentHour) && (minute == currentMinute)) {
        alert ("It's TIME!");
        console.log("It's time");
        console.log(currentMinute);
      }
    }
  //  console.log("It's time");
    console.log(currentMinute);
    console.log(minute);

    setInterval(alarm, 1000);
  });
});
