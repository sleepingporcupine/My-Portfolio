$(document).ready(function(){

	/*boring*/
	$("a").click(function(){
		$(this).blur();
	});

	/***********\
	* variables	*
	\***********/


	
	function pageWidth() {return $(window).width();};
	function pageHeight() {return $(window).height();};
	var small = (screen.width <= 1280) ? 1 : 0;
	function margin(el){return ($(el).width())/2};
	var x = 0;
	
	function startup(){
	window.scrollTo(pageWidth(),0);
	var w = Math.floor(pageWidth()*0.65);
    if(w > 800){
    w = 800;
    } else if (w < 200) {
    w = 200;
    }
    $('#cover').css({'width' : pageWidth(), 'height' : pageHeight()});
   if(pageHeight() < 630){
			$('#title').css('top' , '-160px');
		} else {
		
		var r = 100-(w/16)*1.5;
		var ml = (w/2)*-1;
						$('#title').animate({'width': w, 'margin-left': ml},0);
						
			$('#title').css('top' , r);
			reloadImg('title');
		};
	//resizeMessage?
		if(pageWidth() < 750 || pageHeight() < 550){
			$('#resize').slideDown();
		} else {
			$('#resize').slideUp();
}
};
startup();
	/***********\
	* rollovers	*
	\***********/
	
		/*navigation*/
		
			/*over*/
				
				$("#nav").mouseover(function(){
						$(this).stop().animate({height:'230px'},200);
						$('#logo2').stop().animate({opacity: 0},200);
            			$('#logo').stop().animate({opacity: 1},200);
				});

			/*out*/
				$("#nav").mouseout(function(){
						$(this).stop().animate({height:'140px'},200);
						$('#logo2').stop().animate({opacity: 1},200);
    					$('#logo').stop().animate({opacity: 0},200);
    			});

		/*CONTACT LINKS*/
			$(".link.fb").mouseover(function(){
				document.getElementById("contactme").innerHTML = 'Facebook';
			});
			
			$(".link.tw").mouseover(function(){
				document.getElementById("contactme").innerHTML = 'Twitter';
			});
			
			$(".link.dr").mouseover(function(){
				document.getElementById("contactme").innerHTML = 'Dribbble';
			});
			
			$(".link.em").mouseover(function(){
				document.getElementById("contactme").innerHTML = 'Email';
			});
			
			$(".link.ac").mouseover(function(){
				document.getElementById("contactme").innerHTML = 'Skills';
			});
	
			$(".link").mouseout(function(){
				document.getElementById("contactme").innerHTML = 'Contact Me';
			});
			
		/*CONTROL '!'*/
			$("#controlToggle span").mouseover(function(){
				$(this).stop().animate({top:'-40px'},200);
			});
			
			$("#controlToggle span").mouseout(function(){
				$(this).stop().animate({top:'0px'},200);
			});
		
		
	/***********\
	* bouncing	*
	\***********/
		
 				/*Please hire me (puppy eyes)!*/
 				
 					$("#hire").everyTime(150, function(){	
						$("#hire").animate({top:"-=4"}, 600, 'easeInSine').animate({top:"+=4"}, 600, 'easeInOutSine');	
					});

 				/*It's the first step for design-kind!*/

 					$("#planner").everyTime(200, function(){	
						$("#planner").animate({top:"+=8"}, 600, 'easeInSine').animate({top:"-=8"}, 600, 'easeInOutSine');	
					});
				
	/***********\
	*   click 	*
	\***********/
	
	  			/*NEXT*/
					$(".next").click(function(){
						var elementClicked = $(this).attr("href");
   						var destination = $(elementClicked).offset().left;
   						var id = $(this).attr("id");
   						if(id == "for"){
   						
 							$("html:not(:animated),body:not(:animated)").animate({ scrollLeft: pageWidth()*6}, 700 );
 							
 						} else {
 						
   								var destination = $(elementClicked).offset().left;
   								$("html:not(:animated),body:not(:animated)").animate({ scrollLeft: destination-(pageWidth()/2)+margin(elementClicked)}, 1400 );
						
						}
	  					return false;
					});
	
				/*PREV*/
  
					$('.prev').click(function() {
 							var elementClicked = $(this).attr("href");
 							var id = $(this).attr("id");
 						if(id == "back"){
 							$("html:not(:animated),body:not(:animated)").animate({ scrollLeft: 0}, 700 );
 							
 						}  else {
 						
   								var destination = $(elementClicked).offset().left;
   								$("html:not(:animated),body:not(:animated)").animate({ scrollLeft: destination-(pageWidth()/2)+margin(elementClicked)}, 1400 );
						
						}
   							return false;
					});
					
				
					

				/*NAV LINKS*/
					$('.links li a').click(function() {
   						var elementClicked = $(this).attr("href");
   						var destination = $(elementClicked).offset().left;
   						$("html:not(:animated),body:not(:animated)").animate({ scrollLeft: destination-(pageWidth()/2)+margin(elementClicked)}, 1400 );
 
   						return false;
					});

				/*PROJECT PLUS BUTTONS*/
					$(".full").click(function(){ 
	 					viewer_animation(1);
   						
   						return false;
					}); 
	
					function viewer_animation(i){
						var speed = 300;
						if(i==1){
							$('#project ul li:nth-child(7)').animate({top:'-=128',left:'+=128'},speed,function() {$('li:nth-child(7)' ).css( 'display','none' );$('#project ul li:nth-child(7)').animate({left:'+=128'},0);$('#project ul li:nth-child(10)').animate({left:'-=128'},0);});
							$('#project ul li:nth-child(8)').animate({top:'-=128',left:'-=128'},speed,function() {$( 'li:nth-child(8)' ).css( "display","none" );});
							$('#project ul li:nth-child(9)').animate({top:'-=128',left:'+=128'},speed,function() {$( 'li:nth-child(9)' ).css( "display","none" );});
							$('#project ul li:nth-child(10)').animate({top:'-=128',left:'-=128'},speed,function() {$('li:nth-child(10)' ).css( 'display','none' );});
							setTimeout("var speed = 300;$('#project ul li:nth-child(4)').animate({top:'-=128',left:'+=128'},speed,function() {$('#project ul li:nth-child(4)' ).css( 'display','none' );});$('#project ul li:nth-child(6)').animate({top:'-=128',left:'-=128'},speed,function() {$('#project ul li:nth-child(6)').css( 'display','none' );});", 350);
							setTimeout("var speed = 300;$('#project ul li:nth-child(2)').animate({top:'+=128',left:'+=128'},speed,function() {$('#project ul li:nth-child(2)' ).css( 'display','none' );});$('#project ul li:nth-child(3)').animate({top:'+=128',left:'-=128'},speed,function() {$('#project ul li:nth-child(3)').css( 'display','none' );});", 700);
							setTimeout("var speed = 300;document.getElementById('viewer').style.display = 'block';$('#viewer').animate({ opacity:'1.0'}, 600);",1050);
							setTimeout("var speed = 300;$('#project ul li:nth-child(7)').css( 'display','block' );$('#project ul li:nth-child(10)').css( 'display','block');$('#project ul li:nth-child(7)').animate({top:'+=128',left:'-=128'},speed);$('#project ul li:nth-child(10)').animate({top:'+=128',left:'+=128'},speed);document.getElementById('close').style.display = 'block';document.getElementById('info').style.display = 'block';$('#close').animate({ top:'-=125',left:'-=125',opacity:'1.0' }, speed ); $('#info').animate({ opacity:'1.0' }, 400 );", 1700);
						} else {
							$('#project ul li:nth-child(7)').animate({top:'-=128',left:'+=128'},speed,function() {$('li:nth-child(7)' ).css( 'display','none' );$('#project ul li:nth-child(7)').animate({left:'-=128'},0);$('#project ul li:nth-child(10)').animate({left:'+=128'},0);});
							$('#project ul li:nth-child(10)').animate({top:'-=128',left:'-=128'},speed,function() {$('li:nth-child(10)' ).css( 'display','none' );});
							$('#info').animate({opacity: 0,}, speed, function() {$( '#info' ).css( 'display','none' );});
							$('#close').animate({top:'+=125',left:'+=125',opacity: 0,}, speed, function() {$( '#close' ).css( 'display','none' );});
	 						setTimeout("$('#viewer').animate({opacity: 0,}, 600, function() {$( '#viewer' ).css( 'display','none');});",350);
							setTimeout("var speed = 300;$('#project ul li:nth-child(3)').css( 'display','block' );$('#project ul li:nth-child(2)').css( 'display','block' );$('#project ul li:nth-child(2)').animate({top:'-=128',left:'-=128'},speed);$('#project ul li:nth-child(3)').animate({top:'-=128',left:'+=128'},speed);",1000);
							setTimeout("var speed = 300;$('#project ul li:nth-child(4)').css( 'display','block' );$('#project ul li:nth-child(6)').css( 'display','block');$('li:nth-child(4)').animate({top:'+=128',left:'-=128'},speed);$('li:nth-child(6)').animate({top:'+=128',left:'+=128'},speed);", 1350);
							setTimeout("var speed = 300;$('#project ul li:nth-child(7)').css( 'display','block' );$('#project ul li:nth-child(8)').css( 'display','block' );$('#project ul li:nth-child(9)').css( 'display','block' );$('#project ul li:nth-child(10)').css( 'display','block' );$('#project ul li:nth-child(7)').animate({top:'+=128',left:'-=128'},speed);$('#project ul li:nth-child(10)').animate({top:'+=128',left:'+=128'},speed);$('#project ul li:nth-child(9)').animate({top:'+=128',left:'-=128'},speed);$('li:nth-child(8)').animate({top:'+=128',left:'+=128'},speed);",1700);
						};
				};
			/*PROJECT CROSS BUTTONS*/
				$('#close').click(function() {
  					viewer_animation(0);
				});
				
			/*MENU*/
				$('#controlToggle').click(function() {tog();});
				$('#controls').click(function() {tog();});
				
				function tog(){

					if(x == 0){
 						$("#controlToggle").animate({ top:'180px' }, 400 );
 						$("#controls").animate({ top:'0px' }, 400 );
 						x=1;
					} else {
 						$("#controlToggle").animate({ top:'0px' }, 400 );
 						$("#controls").animate({ top:'-230px' }, 400 );
 						x=0;
					};
				};
				var $menu = $("#controlToggle");
				var opacity = $menu.css("opacity");
				var scrollStopped;

		
				$(window).scroll(function () {
    				if (!$menu.is(":animated") && opacity == 1) {
       					$("#controlToggle").animate({ top:'0px' }, 400 );
 						$("#controls").animate({ top:'-230px' }, 400 );
 						x=0;
    				};
    			});
    			
    		
    			
    /***********\
	*  resize 	*
	\***********/		
    			
    			$(window).bind("resize", function (){

        			//resizeMessage?
					if(pageWidth() < 750 || pageHeight() < 550){
							$('#resize').slideDown();
					} else {
							$('#resize').slideUp();
					};
         
         			if(this.tooSmall) clearTimeout(this.tooSmall);
    					this.tooSmall = setTimeout(function() {
        				$(this).trigger('tooSmall');
    				}, 100);
    			});
    
				$(window).bind('tooSmall', function() {
    					//do something, window hasn't changed size in 500ms
   						var w = pageWidth()*0.65;
    				if(w > 800){
   						w = 800;
    				} else if (w < 200) {
    					w = 200;
    				}
   					if(pageHeight() < 630){
						$('#title').css('top' , '-160px');
					} else {
						var r = 100-(w/16)*1.5;
						$('#title').css('top' , r);
						reloadImg('title');
					}
						var ml = (w/2)*-1;
						$('#title').animate({'width': w, 'margin-left': ml},300);
						

						$("html:not(:animated),body:not(:animated)").animate({ scrollLeft:pageWidth()}, 300 );

				});
				
				function reloadImg(id) {
   						var obj = document.getElementById(id);
   						var src;
   					if(pageWidth() <= 770){
   						src = "css/images/title_small.png";
   					}else if (pageWidth() <= 923){
						src = "css/images/title_mid.png";
   					}else{
						src = "css/images/title.png";
   					}
   						var pos = src.indexOf('?');
   					if (pos >= 0) {
      					src = src.substr(0, pos);
   					};
   						var date = new Date();
   					obj.src = src + '?v=' + date.getTime();
   
   					return false;
				};

				
});
