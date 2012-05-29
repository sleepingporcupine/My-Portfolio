$(document).ready(function(){
var i = 0;
var title;
//ARRAYS
var myProjects=new Array("EHY","Catherine Cooks FOR YOU!","number3","number4","number5","number6","number7");
var descriptions=new Array("Branding, Web Design & Stationery","Web Design","number3 info","number4 info","number5 info","number6 info","number7 info");
var links=new Array("http://bit.ly/ehproto","http://www.catherinecooks.me.uk","#","#","#","#","#");

$('.full').click(function(){
  changeInfo(0,$(this).attr("title"));
});
$('#nextProj').click(function(){

  changeInfo(1);
});
$('#prevProj').click(function(){

  changeInfo(-1);
});
function changeInfo(x,t) {
if(t){
title = t;
i = jQuery.inArray(title, myProjects);

} else{

if(x==1){i++;}else{i--;}
if(i < 0){i = myProjects.length-(-i);}
title = myProjects[i%myProjects.length];
}
/*
document.getElementById('info').innerHTML = '<h4>' + title + '</h4>';
*/
}
});