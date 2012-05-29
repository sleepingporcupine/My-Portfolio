$(window).resize(function(){
  $("html:not(:animated),body:not(:animated)").animate({ scrollLeft: pageWidth()}, 100 );
  
});