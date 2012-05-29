$(document).ready(function(){

	/*boring*/
	$("a").click(function(){
		$(this).blur();
	});
	
	/***********\
	* variables	*
	\***********/
	
	
	function pageWidth() {return $(window).width();}
	function pageHeight() {return $(window).height();}
	function margin(el){return ($(el).width())/2}
	var isOpen = false;
	var filterOpen = false;
	
	/***********\
	*  start up	*
	\***********/
	
	this.startUp = setTimeout(function() {
	if(pageWidth() > 540){
    	$('footer[name="big"]').animate({bottom: '-400px'}, 600);
    	
    		
    		$('header[name="big"]').animate({top: '-300px'}, 600);
    	}
    	$('ul.work').css('display','block').animate({marginTop: '-90px', opacity:'1'}, 600);
    	//$('body').css({'-webkit-box-shadow':'inset 0 0 0 5px #00cebc'});
    }, 7500);
	
	function workanimation(i){
		switch(i){
		
		case 0:
			$('ul.work').css('display','block').animate({marginTop: '-90px', opacity:'1'}, 600);
		break;
		case 1:
			$('ul.work').stop().animate({marginTop: '-120px', opacity:'0'},600,function(){$(this).css('display', 'none')});
		break;
		
		}
	}
	/***********\
	*  footer	*
	\***********/
	
	function changeIcon(side){
		if(isOpen){
			$('footer .title').stop().animate({top:'-180px'}, 600);
			$(side).fadeOut(300, function () {
			var newSide = side.replace(/\s/g, "");
				document[newSide].src= (side == 'footer .tab.left .icon') ? 'css/images/tabs/icons/icon_contact.png' : 'css/images/tabs/icons/icon_i.png';
            	$(side).fadeIn(300);
          	});
		} else {
			$('footer .title').stop().animate({top:'0px'}, 600);
			$(side).fadeOut(300, function () {
			var newSide = side.replace(/\s/g, "");
				document[newSide].src= 'css/images/tabs/icons/icon_cross.png';
            	$(side).fadeIn(300);
          	});
		}
	}
	
	$('footer .tab.left').click(function(){
		if (isOpen){
			
			$('footer .tab.right').stop().animate({top:'-180px'}, 600);
			changeIcon('footer .tab.left .icon');
			$('footer').stop().animate({bottom:'-400px'}, 600, function(){$('footer section.contact').css('display', 'none')});
			workanimation(0);
		} else {
			if(filterOpen){
				$('header').stop().animate({'top':'-300px'}, 700, 'easeOutBack', function(){filterOpen = !filterOpen;});
			}
			$('footer section.contact').css('display', 'block');
			$('footer .tab.right').stop().animate({top:'0px'}, 600);
			changeIcon('footer .tab.left .icon');
			$('footer').stop().animate({bottom:'0px'}, 600);
			workanimation(1);
		}
		isOpen = !isOpen;
	});
	
	$('footer .tab.right').click(function(){
		
		if (isOpen){
			$('footer .tab.left').stop().animate({top:'-180px'}, 600);
			changeIcon('footer .tab.right .icon');
			$('footer').stop().animate({bottom:'-400px'}, 600, function(){$('footer section.about').css('display', 'none')});
			workanimation(0);
		} else {
			if(filterOpen){
			$('header').stop().animate({'top':'-300px'}, 700, 'easeOutBack', function(){filterOpen = !filterOpen;});
			}
			
			$('footer section.about').css('display', 'block');
			$('footer .tab.left').stop().animate({top:'0px'}, 600);
			changeIcon('footer .tab.right .icon');
			$('footer').stop().animate({bottom:'0px'}, 600);
			workanimation(1);
		}
		isOpen = !isOpen;
		
	});
	
	$('footer section.contact #Me .download').mouseover(function(){
		$('footer section.contact #Me .download .ui-tt').stop().show().animate({
                    'top':'-6px', 'opacity' : '1'
                }, 250);
	});
	
	$('footer section.contact #Me .download').mouseout(function(){
		$('footer section.contact #Me .download .ui-tt').stop().animate({
                    'top':'0px', 'opacity' : '0'
                },  250, function(){   $(this).hide(); });
	});
	/***********\
	* 	header	*
	\***********/
	
	$('header').click(function(){
		if(!$('header').is(':animated')){
			if (!filterOpen && !isOpen && pageWidth() > 540){
				filterOpen = !filterOpen;
				$(this).stop().animate({'top':'0px'}, 700, 'easeOutBack');
				workanimation(1);
    		} else if (filterOpen && !isOpen && pageWidth() > 540){
    			$(this).stop().animate({'top':'-300px'}, 700, 'easeOutBack', function(){filterOpen 	= !filterOpen;});
    			workanimation(0);
    		}
    	}
    	
		
	});
	
	$('header').mouseover(function(){
	
		if (!filterOpen && !isOpen  && pageWidth() > 540){
			$(this).stop().animate({'top':'-280px'}, 300, 'easeOutBack');
			
    	}
	}).mouseout(function(){
		if (!filterOpen && !isOpen && pageWidth() > 540){
			$(this).stop().animate({'top':'-300px'},  300, 'easeOutBack');
		}
	});
	
	/***********\
	* 	lines	*
	\***********/
	var lines = $('.sentence');
	$(window).bind("load", function() {
		$(lines[0]).delay(200).fadeIn(800,function(){
			$(lines[1]).delay(600).fadeIn(800,function(){
				$(lines[2]).delay(600).fadeIn(800,function(){
					$(lines[0]).delay(1600).fadeOut(700);
					$(lines[1]).delay(1600).fadeOut(700);
					$(lines[2]).delay(1600).fadeOut(700, function(){
						$('#comment').delay(200).css('display','none');
					});
					
				});
			});
		});
	});
	/***********\
	* 	extra	*
	\***********/
	
	$('footer section.contact #Me #social a.fb-like').mouseover(function(){
	
			$('footer section.contact #Me #social a.tw').animate({'margin-right':'74px'}, 200);
			
	});
	$('footer section.contact #Me #social a.fb-like').mouseout(function(){
	
			$('footer section.contact #Me #social a.tw').animate({'margin-right':'80px'}, 200);
			
	});
				
			/*MENU
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
    			
    		
    		*/	
    /***********\
	*  resize 	*
	\***********/	
    			
    			$(window).resize(function() {

        			/*//resizeMessage?
					if(pageWidth() < 600 || pageHeight() < 400){
							$('#resize').slideDown();
					} else {
							$('#resize').slideUp();
					};*/
					
						//$('header').animate({top: '-300px'}, 600);
						//$('footer').animate({bottom: '-400px'}, 600);
					
         			/*if(pageWidth() > 540){
					
						$('header').animate({top: '-300px'}, 600);
						$('footer').animate({bottom: '-400px'}, 600);
						
					} else {
					
						$('header').animate({top: '0px'}, 600);
						$('footer').animate({bottom: '0px'}, 600);
					}*/
         			if(this.tooSmall) clearTimeout(this.tooSmall);
    					this.tooSmall = setTimeout(function() {
    					if(!isOpen){
        					$(this).trigger('tooSmall');
        				}
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
   					if(pageHeight() < 450){
						$('#title').css('top' , '0px');
					} else {
						var r = -90-(w/40)*4.5;
						$('#title').css('top' , r);
						reloadImg('title');
					}
						var ml = (w/2)*-1;
						$('#title').animate({'width': w, 'margin-left': ml},300);
						
						//waitForFinalEvent(function(){
    
      				/*if(pageWidth() > 540){
					
						$('header').animate({top: '-300px'}, 600);
						$('footer').animate({bottom: '-400px'}, 600);
						
					} else {
					
						$('header').animate({top: '0px'}, 600);
						$('footer').animate({bottom: '0px'}, 600);
					}*/


    //}, 500, "sp2012");
				});
				var waitForFinalEvent = (function () {
  					var timers = {};
  						return function (callback, ms, uniqueId) {
    						if (!uniqueId) {
      							uniqueId = "Don't call this twice without a uniqueId";
    						}
   							if (timers[uniqueId]) {
      							clearTimeout (timers[uniqueId]);
   							}
    						timers[uniqueId] = setTimeout(callback, ms);
  						};
				})();
				
				function reloadImg(id) {
   						var obj = document.getElementById(id);
   						var src = "css/images/title.png"
   						
   						var pos = src.indexOf('?');
   					if (pos >= 0) {
      					src = src.substr(0, pos);
   					};
   						var date = new Date();
   					obj.src = src + '?v=' + date.getTime();
   
   					return false;
				};
				

				
});
