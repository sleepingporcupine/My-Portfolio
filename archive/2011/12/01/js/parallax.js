$(window).scroll(function(e) {
		function pageWidth() {return $(window).width();};
 		var scroll_position = $(window).scrollLeft();
    /* --------------- normal scroll ----------------- */ 
   
    if(scroll_position <= 0){
   	
    	 window.scrollTo( pageWidth()*6, 0) ;
    	$("html:not(:animated),body:not(:animated)").animate({ scrollLeft: pageWidth()*5}, 800 );
    }
    if(scroll_position >= pageWidth()*6){
   	
    	 window.scrollTo( 0, 0) ;
    	$("html:not(:animated),body:not(:animated)").animate({ scrollLeft: pageWidth()}, 800 );
    }
  if(scroll_position < pageWidth()*4.5 || scroll_position > pageWidth()*6){
    $('#bring').css('display', 'none');
    $('#bring').css('right', '-9610px');
    
    } else {
     $('#bring').css('display', 'block');
    }
    
    /* -------------- parallax scroll ---------------- */
    
    
    var object_speed = 0.2; 
    var object_speed2 = 0.4; 
    var object_speed3 = 1.5;
    var object_speed4 = 3.0;
    
   var x1 = -9480;
   var x2 = -8880;
   var x3 = -9080;
   var x4 = -9610;
    
  function formula(x) {return x-((9600-(pageWidth()*5))*-1);}
    
   if (scroll_position >= (pageWidth()*4) && scroll_position <= (pageWidth()*6)) {
        $("#bot_tri").stop().animate({ bottom:(formula(x1) * object_speed3)+(scroll_position * object_speed3)}, 0);
        $("#top_tri").stop().animate({ top:(formula(x2) * object_speed2)+(scroll_position * object_speed2)}, 0);
        $("#right_tri").stop().animate({ right:(formula(x3) * object_speed2)+(scroll_position * object_speed2)}, 0);
          $("#bring").stop().animate({ right:(formula(x4) * object_speed4)+(scroll_position * object_speed4)}, 0);
       
    }
    
  

});
    