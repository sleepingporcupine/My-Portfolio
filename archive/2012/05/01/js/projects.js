$(document).ready(function(){

	
	$('header ul li a').click(function(){
		var index = $(this).attr("title");
		
		config(parseInt(index));
	});	
	$('ul.work a').click(function(){
		var name = $(this).attr("name");
		alert(name);
		
	});
	var projects = TAFFY();
	function project(vname,vcategory,vno) {
		projects.insert({name:vname,category:vcategory,no:vno});
	}
	
var categories = {

	web : "Web Design",
	art : "Illustration",
	logo : "Branding",
	ios : "iOS Apps"
}

project("project1", categories.web, 1);
project("project2", categories.web, 2);
project("project3", categories.web, 3);
project("project4", categories.web, 4);

project("project5", categories.art, 1);
project("project6", categories.art, 2);
project("project7", categories.art, 3);
project("project8", categories.art, 4);

project("project9", categories.logo, 1);
project("project10", categories.logo, 2);
project("project11", categories.logo, 3);
project("project12", categories.logo, 4);

project("project13", categories.ios, 1);
project("project14", categories.ios, 2);
project("project15", categories.ios, 3);
project("project16", categories.ios, 4);

	
	
	
function config(i){
	
	switch(i){
		case 0:
			updateWork();
		break;
		case 1:
			updateWork(categories.web, "web",0);
		break;
		case 2:
			updateWork(categories.art, "art",1);
		break;
		case 3:
			updateWork(categories.logo, "logo",2);		
		break;
		case 4:
			updateWork(categories.ios, "ios",3);
		break;
	}
	
}
var hex = new Array("68a300","fd5800","fac500","b01d43");
function updateWork(c,t,h){
if(c){
	var i=0;
	for (i=0;i<4;i++){
		var x = i+1;
		projects({category:c, no:x}).each(function(r){
		
		$('ul.work a:nth-child(' + x + ')').attr("name" , r.name);
		$('ul.work a:nth-child(' + x + ') li').css('background-image','url(http://placehold.it/180/'+ hex[h] + '/fff&text=' + t + ')');
		
		});
		
	}
} else {
	var x = 1;
	for(var i in categories)
	{
		
		var c = eval('categories.'+i);
    	projects({category:c, no:x}).each(function(r){
    	$('ul.work a:nth-child(' + x + ')').attr("name" , r.name);
    	$('ul.work a:nth-child(' + x + ') li').css('background-image','url(http://placehold.it/180/'+ hex[x-1] + '/fff&text=' + i + ')');
    	});
    	
    	x++;
	}
}
}
	
});//end