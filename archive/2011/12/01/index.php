<?PHP
/*
    Contact Form from HTML Form Guide
    This program is free software published under the
    terms of the GNU Lesser General Public License.
    See this page for more info:
    http://www.html-form-guide.com/contact-form/php-contact-form-tutorial.html
*/
require_once("php/include/fgcontactform.php");

$formproc = new FGContactForm();


//1. Add your email address here.
//You can add more than one receipients.
$formproc->AddRecipient('hello@sleepingporcupine.co.uk'); //<<---Put my email address here


//2. For better security. Get a random string from this link: http://tinyurl.com/randstr
// and put it here
$formproc->SetFormRandomKey('CnRrspl1FyEylUj');


if(isset($_POST['submitted']))
{
   if($formproc->ProcessForm())
   {
        $formproc->RedirectToURL("php/thank-you.php");
   }
}

?>
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">

<title>Sleeping Porcupine Studios - Design & Development</title>
       <link rel="stylesheet" type="text/css" href="css/main.css" media="screen"/>
	<script type='text/javascript' src='js/gen_validatorv31.js'></script>
   
    <link rel="icon" 
      type="image/png" 
      href="http://prototype.sleepingporcupine.co.uk/favicon.png">
      <div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
</head>
<body>

<img id="title" class="center-x" width="800" height="150" src="css/images/title.png" alt="SLEEPING PORCUPINE"/>
<div id="nav">
<div id="logo"></div><!--#logo-->
<div id="logo2"></div><!--#logo2-->


<ul class="links ostrich">
<li>
	<a id="about_nav" href="#introBox">
		about
		
	</a>
</li>
<li>
	<a id="work_nav" href="#project">
		work
	</a>
</li>
<li>
	<a id="contact_nav" href="#contactBox">
		contact
	</a>
</li>
</ul>

</div><!--#nav--> 
<div id="controls">
	<h3 class="ostrich grey">
		More than one way?
	</h3>
	<p class="helvetica grey small">
		<b>To navigate, you can use:</b><br/><br/>The <b>navigation </b>in the <b>top left </b>corner<br/>The <b>next</b> and <b>previous</b> triangles that are dotted around<br/>The <b>arrow keys<br/>OR</b><br/>for you <b>retro</b> gamers... <b>'WASD'</b><br/>(<b>arrows</b> and <b>'WASD'</b> only for <b>Safari</b> <br/>and <b>Chrome</b>, sorry)
	</p>
</div>
<div class="ostrich white" id="controlToggle"><span>!<br/>!</span></div>

<div id="introBox" class="center-x center-y content">
<a href="files/hire.pdf" target="_blank" id="hire"><img alt="hire" src="css/images/hire.png"/></a>
<a href="files/hire.pdf" target="_blank" id="planner"><img alt="planner" src="css/images/planner.png"/></a>
<p class="text ostrich grey">
	Hello, i am an aspiring designer & developer from England.<br/> 
</p>
<a href="#project" class="next about"></a>
<h2 class="navText ostrich grey">About Me</h2>
<a href="#contactBox" id="back" class="prev about"></a>

</div><!--#introBox-->

<div id="project">
<div class="readmore white ostrich"><h4>?</h4></div>

</div><!--project-->

<div id="contactBox" class="content center-y">
<div id="Me">
	<h4 class="blue ostrich" style="text-align:center;">
		This is Me
	</h4>
	<div class="photo"></div>
	<span class="label small helvetica grey">Name:</span>
	<span class="value small helvetica grey">Elliot Greenwood</span></br>
	<span class="label small helvetica grey">E-Mail:</span>
	<span class="value small helvetica grey"><a class="dotted" href="mailto:hello@sleepingporcupine.co.uk?subject:Hello Sleeping Porcupine">hello@sleepingporcupine.co.uk</a></span></br>
	<span class="label small helvetica grey">Twitter:</span>
	<span class="value small helvetica grey"><a class="dotted" href="https://twitter.com/#!/porcupinestudio">@porcupinestudio</a></span></br>
	<span class="label small helvetica grey">Facebook:</span>
	<span class="value small helvetica grey"><a class="dotted" href="https://www.facebook.com/SleepingPorcupineStudios">Sleeping Porcupine Studios</a></span></br>
	<span class="label small helvetica grey">About Me:</span></br>
	<span class="message small helvetica grey">
		Hello! I'm Elliot a student from Cambridgeshire with a passion for simplistic design. I love technology and I find myself continuously looking for another cool piece of tech. Ultimately I'd like to work for myself and run a small studio, and what better way to start than powering my universe of creativity from a small desk and a mighty small notebook. Now, go on &mdash; fill out the form over there and soon your creation will bloom.
	</span></br>
	<a href="files/me.vcf" class="download white small helvetica">download my v-card</a>
</div><!--Me-->
<div id="You">
	<h4 class="blue ostrich" style="text-align:center;">
		This is You
	</h4>
	<div class="photo"></div>
	<form id='contactus' accept-charset='UTF-8' method="post" class="blue ostrich" action="<?php echo $formproc->GetSelfScript(); ?>">  
          	
            <p style="text-align:center;" class="small blue helvetica">(* means required, but you knew that!)</p>             
            	
            	<input type='hidden' name='submitted' id='submitted' value='1'/>
				<input type='hidden' name='<?php echo $formproc->GetFormIDInputName(); ?>' value='<?php echo $formproc->GetFormIDInputValue(); ?>'/></br>
				<input type='text'  class='spmhidip' name='<?php echo $formproc->GetSpamTrapInputName(); ?>' />
				
            	<span class="label small helvetica grey">Name:</span>
                <input class="helvetica grey value small" id="name" name="name" type="text" placeholder="*"/></br>
                <span id='contactus_name_errorloc' class='error small helvetica'></span></br>
                
                <span class="label small helvetica grey">E-Mail:</span>
                <input  class="helvetica grey value small" id="email" name="email" type="email" placeholder="*"/></br>
                <span id='contactus_email_errorloc' class='error small helvetica'></span>
                <span id='contactus_message_errorloc' class='error small helvetica'></span></br>
                <span class="label small helvetica grey">Message:</span></br>
                <textarea class="helvetica grey message small" placeholder="" id="message" name="message" cols="" rows=""></textarea></br> 
                
                
             	<input class="helvetica white send" id="send" name="send" type="submit" value="Whoosh!" />
        </form> 
        <script type='text/javascript'>
// <![CDATA[

    var frmvalidator  = new Validator("contactus");
   frmvalidator.EnableOnPageErrorDisplay();
    //frmvalidator.EnableMsgsTogether();
    frmvalidator.addValidation("name","req","Please enter your name");

    frmvalidator.addValidation("email","req","Please enter your E-Mail");

    frmvalidator.addValidation("email","email","Please enter a valid E-Mail");

    frmvalidator.addValidation("message","maxlen=2048","The message is too long!");

// ]]>
</script>
</div><!--You-->


	<a href="#project" class="prev contact"></a>
	<a href="#introBox" id="for" class="next contact"></a>

</div>
<div id="theEnd"></div><!--#theEnd-->
<div id="footer">
	<span class="small blue helvetica" style="float:right;text-align:right;display:inline-block;"> &copy; 2011 Sleeping Porcupine</span>
	<div style="float:right;display:inline-block;" class="fb-like" data-href="https://www.facebook.com/SleepingPorcupineStudios" data-send="false" data-layout="button_count" data-width="100" data-show-faces="false" data-font="tahoma"></div>
	
	
</div><!--footer-->
   <div id="resize">
  <h1 class="grey ostrich"> Bit Squished?</h1>
  <p class="grey helvetica">Please increase your browser size so that you can<br/> marvel at the true beauty of our site not a <br/>condensed version of it. Cheers.</p>
   </div>
   
    
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script type="text/javascript" src="js/jquery.timers-1.1.2.js" ></script> 
    <script src="js/jquery.easing.1.3.js" type="text/javascript"></script> 
   	<script src="js/main.js" type="text/javascript"></script>
   	<script src="js/parallax.js" type="text/javascript"></script>
   	<script src="js/lightbox.js" type="text/javascript"></script>
   	<script src="js/navigation.js" type="text/javascript"></script>

    


</body>
</html>




