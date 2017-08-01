$(document).ready(function(){
  setInterval(function(){
    $('#time').text(moment.utc().format('YYYY-MM-DD HH:mm:ss'));
  }, 1000);
$('#time-entered').text(moment());
});
