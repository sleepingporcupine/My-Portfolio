$(document).ready(function(){

function pageWidth() {return window.innerWidth != null? window.innerWidth: document.body != null? document.body.clientWidth:null;}

	
function nextSection(){


	if(window.pageXOffset == pageWidth()){
	$("html:not(:animated),body:not(:animated)").animate({ scrollLeft:pageWidth()*3.0}, 1400 );
   return false;
	}
	else if (window.pageXOffset == pageWidth()*3.0) {
	$("html:not(:animated),body:not(:animated)").animate({ scrollLeft:pageWidth()*5.0}, 1400 );
	return false;
	}
	else if (window.pageXOffset == pageWidth()*5.0) {
	$("html:not(:animated),body:not(:animated)").animate({ scrollLeft:pageWidth()*6.0}, 700 );
	return false;
	
	}
	
	
}
function prevSection(){

	
	 if (window.pageXOffset == pageWidth()*3.0) {
	
	$("html:not(:animated),body:not(:animated)").animate({ scrollLeft:pageWidth()}, 1400 );
	return false;
	
	}
	else if (window.pageXOffset == pageWidth()*5.0) {
	$("html:not(:animated),body:not(:animated)").animate({ scrollLeft:pageWidth()*3.0}, 1400 );
	return false;
	
	}
	else if (window.pageXOffset == pageWidth()) {
	$("html:not(:animated),body:not(:animated)").animate({ scrollLeft:0}, 700 );
	return false;
	
	}
	
}

 
   
   
  $("body").keyup(function(e) {
  if (!($("input").is(":focus")) && !($("textarea").is(":focus"))){
  var keyCode = e.keyCode || e.which,
      arrow = {left: 37, right: 39};

  switch (keyCode) {
    case arrow.left:
      prevSection();
    break;
    
    case arrow.right:
      nextSection();
    break;
  }
  }
  });
   $("body").keypress(function(e) {
  if (!($("input").is(":focus")) && !($("textarea").is(":focus"))){
  if(e.keyCode == 100){
  nextSection();
  }
  if(e.keyCode == 97){
  prevSection();
  }
  }

});
   


});