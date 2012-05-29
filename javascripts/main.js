$(document).ready(function() { 
	alert("test");
	


$("nav ul.stationary").waypoint(function(event, direction) {
   if (direction == 'down') {
      // do this on the way down
      $(this).css({'position':'fixed','top':'0px'});
   }
   else {
      // do this on the way back up through the waypoint
      $(this).css({'position':'absolute','top':'180px'});
   }
   
});



});