$(document).ready(function(){
  setInterval( function(){
    $('#time').text(moment.utc().format('YYYY-MM-DD HH:mm:ss'));
  }, 1000);

  var myVar;

  function myFunction() {
      myVar = setInterval(alertFunc, 10000);
  }

  function alertFunc() {
      alert("Hello!");
  }

  
});
