<?PHP
/*
    Contact Form from HTML Form Guide
    This program is free software published under the
    terms of the GNU Lesser General Public License.
    See this page for more info:
    http://www.html-form-guide.com/contact-form/php-contact-form-tutorial.html
*/
require_once("../../../../php/include/fgcontactform.php");

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
        $formproc->RedirectToURL("../../../../php/thank-you.php");
   }
}

?>
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name = "viewport" content = "initial-scale = 1, user-scalable = no">
    <title>Sleeping Porcupine ▲ Design & Development</title>
    <link rel="image_src" href="css/images/logo_fb.png" / >
 	<meta name="description" content="Sleeping Porcupine ▲ Web design & development | Branding | iOS Apps | typography" />
	<meta name="keywords" content="design, freelance, sleeping porcupine, sleeping, porcupine, web development" />
       <link rel="stylesheet" type="text/css" href="css/main.css" media="screen"/>
        <link rel="stylesheet" type="text/css" href="css/footer_mob.css" media="screen and (max-width:540px)"/>
         <link rel="stylesheet" type="text/css" href="css/footer.css" media="screen and (min-width:540px)"/>
	<script type='text/javascript' src='js/gen_validatorv31.js'></script>
   
    <link rel="icon" 
      type="image/png" 
      href="http://prototype.sleepingporcupine.co.uk/favicon.png">
 
</head>
<body>

	<header unselectable="on" name="small">
	<select>
		<option>All</option>
		<option>Web Design</option>
		<option>Illustration</option>
		<option>Branding</option>
		<option>iOS Apps</option>
	</select>
	</header>
	<header unselectable="on" name="big">
		<ul class="ostrich white">
			<li>
				<a href="#" title="0">All</a>
			</li>
			<li>
				<a href="#" title="1">Web Design</a>
			</li>
			<li>
				<a href="#" title="2">Illustration</a>
			</li>
			<li>
				<a href="#" title="3">Branding</a>
			</li>
			<li>
				<a href="#" title="4">iOS Apps</a>
			</li>
		</ul>
		<div class="funnel"></div>
	</header>
		<section id="comment">
	<pre class="helvetica sentence">Hi. </pre>
	<pre class="helvetica sentence">I'm Elliot. </pre>
	<pre class="helvetica sentence">A <b>web designer</b> with a little extra something.</b> </pre>
	
	</section>
	<ul class="work">
		<a href="#" title="1" name="project1">
			<li class="c1" style="background:url('http://placehold.it/180/68a300/fff&text=web');"></li>
		</a>
		<a href="#" title="2" name="project6">
			<li class="c2" style="background:url('http://placehold.it/180/fd5800/fff&text=art')"></li>
		</a>
		<a href="#" title="3" name="project11">
			<li class="c3" style="background:url('http://placehold.it/180/fac500/fff&text=logo')"></li>
		</a>
		<a href="#" title="4" name="project16">
			<li class="c4" style="background:url('http://placehold.it/180/b01d43/fff&text=ios')"></li>
		</a>
	</ul>
	
	<footer name="big">
		<div class="tab left">
			<img name="footer.tab.left.icon" class="icon left" alt="contact" src="css/images/tabs/icons/icon_contact.png"/>
		</div>
			<img alt="title" class="title" id="title" src="css/images/title.png"/>
		<div class="tab right">
			<img name="footer.tab.right.icon" class="icon right" alt="more" src="css/images/tabs/icons/icon_i.png"/>
		</div>
		<section class="about">
			<nav>
				<ul>
				<a href="#about">
					<li class="active a">
					</li>
				</a>
				<a href="#services">
					<li class="b">
					</li>
				</a>
				</ul>
			</nav>
			<div class="content about">
				<ul>
					<li>
						<p class="helvetica small grey">
							Hello, I'm a designer & developer from England and I love clean, minimal & elegant design along with semantic code.
						</p>
					</li>
					
					<li>
						<a href="http://hire.sleepingporcupine.co.uk/">
							<!--IMAGE HERE-->
							<h2 class="ostrich blue">
								HIRE ME
							</h2>
							<h2 class="ostrich blue">
								PRESS ME
							</h2>
						</a>
					</li>
				</ul>
			</div>
		</section>
		<section class="readmore">
		</section>
		<section class="contact">
			<div id="Me">
				<div class="me"></div>
				<div id="titleBlock">
					<h2 class="white ostrich">
						Elliot Greenwood
					</h2>
					<h4 class="white helvetica">
						<a href="mailto:hello@sleepingporcupine.co.uk?subject:Hello Sleeping Porcupine">
							hello@sleepingporcupine.co.uk
						</a>
					</h4>
				</div>
				<div id="social">
				<a class="tw push" target="_blank" href="https://twitter.com/#!/porcupinestudio">
					<h2 class="blue ostrich">
						Follow
					</h2>
  				</a>
				
  				<a class="fb-like push" target="_blank" href="http://www.facebook.com/SleepingPorcupineStudios">
  					<h2 class="blue ostrich">
						Like
					</h2>
  				</a>
			
				</div>
				<a href="files/me.vcf" id="vcard"></a>
			</div><!--Me-->
			
			
			
			
			<div id="You">
				<form id='contactus' accept-charset='UTF-8' method="post" class="blue ostrich" action="<?php echo $formproc->GetSelfScript(); ?>">             
            	
            		<input type='hidden' name='submitted' id='submitted' value='1'/>
					<input type='hidden' name='<?php echo $formproc->GetFormIDInputName(); ?>' value='<?php echo $formproc->GetFormIDInputValue(); ?>'/></br>
					<input type='text'  class='spmhidip' name='<?php echo $formproc->GetSpamTrapInputName(); ?>' />
					
					<span id='contactus_name_errorloc' class='error small helvetica'></span>
					<span id='contactus_email_errorloc' class='error small helvetica'></span>
                	<span id='contactus_message_errorloc' class='error small helvetica'></span></br>
					
            		<span class="label small helvetica white">
            			Your Name is
            		</span>
                	<input class="helvetica white value small" id="name" name="name" type="text" placeholder="*"/></br>
                
                	<span class="label small helvetica white">
                		Your Email is
                	</span>
                	<input  class="helvetica white value small" id="email" name="email" type="email" placeholder="*"/></br>
                	
                	<span class="label small helvetica white">
                		What would you like to say?
                	</span></br>
                	<textarea class="helvetica white message small" placeholder="*" id="message" name="message" cols="" rows=""></textarea></br> 
                
                
             		<input class="helvetica blue send" id="send" name="send" type="submit" value="" />
        		</form> 
        		<script type='text/javascript'>
					// <![CDATA[

    				var frmvalidator  = new Validator("contactus");
   					frmvalidator.EnableOnPageErrorDisplay();
    				//frmvalidator.EnableMsgsTogether();
   					frmvalidator.addValidation("name","req","Please enter your name");

    				frmvalidator.addValidation("email","req","Please enter your E-Mail");

    				frmvalidator.addValidation("email","email","Please enter a valid E-Mail");

    				frmvalidator.addValidation("message","req","Please enter a message");

					// ]]>
				</script>
			</div><!--You-->
		</section>
	</footer>

	<footer name="small">
	footer
	</footer>
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script src="js/main.js" type="text/javascript"></script>
	<script src="js/projects.js" type="text/javascript"></script>
	<script src="js/taffy.js" type="text/javascript"></script>
	<script src="js/jquery.easing.1.3.js" type="text/javascript"></script>
	
</body>
</html>


