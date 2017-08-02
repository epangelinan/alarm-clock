$(document).ready(function(){
  setInterval(function(){
    $('#time').text(moment().format('H:mm:ss'));
  }, 1000);
  $('#time-entered').text(moment());
});
