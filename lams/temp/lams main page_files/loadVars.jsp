<!DOCTYPE html>
<html lang="en-AU">
<head>
    
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache, no-store">
    <meta http-equiv="Expires" content="0">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#a70532">
	<title>Login - LAMS :: Learning Activity Management System</title>
			<link rel="stylesheet" href="/lams/css/main.css" type="text/css" media="screen">
			<link href="http://lams.metropolitan.ac.rs:8080/lams/css/defaultHTML_learner.css" rel="stylesheet" type="text/css">
<link rel="icon" href="/lams/favicon.ico" type="image/x-icon" />
			<link rel="shortcut icon" href="/lams/favicon.ico" type="image/x-icon" />
			<script type="text/javascript" src="/lams/includes/javascript/browser_detect.js"></script>
			<script type="text/javascript" src="/lams/includes/javascript/jquery.js"></script>
			<script type="text/javascript" src="/lams/includes/javascript/bootstrap.min.js"></script>			
			<script type="text/javascript">
				function submitForm() {
					$('#loginForm').submit();
				}

				function onEnter(event) {
					intKeyCode = event.keyCode;
					if (intKeyCode == 13) {
						submitForm();
					}
				}
				
				function isBrowserCompatible() {
					return Modernizr.atobbtoa && Modernizr.checked && Modernizr.cookies && Modernizr.nthchild && Modernizr.opacity &&
						   Modernizr.svg && Modernizr.todataurlpng && Modernizr.websockets && Modernizr.xhrresponsetypetext;
					// Modernizr.datauri - should be included, it's a async test though
					// Modernizr.time - should be included, fails in Chrome for an unknown reason (reported)
					// Modernizr.xhrresponsetypejson - should be included, fails in IE 11 for an unknown reason (reported)
				}

				$(document).ready(function() {
					$('html').addClass('login-body');
					if (!isBrowserCompatible()) {
						$('#browserNotCompatible').show();
					}
					$('#j_username').focus();
					// Naknadno zakomentarisano $('#news').load('/lams/www/news.html');
				});
			</script>
		</head>

<body class="login-body">	
		<div id="particles-js"></div>
			<script type="text/javascript" src="/lams/includes/javascript/particles.js"></script>
			<script type="text/javascript" src="/lams/includes/javascript/app.js"></script>	
		<div class="login-content">		
			
		<div class="container no-gutter lgn">					
			<div id="login-panel" class="col-sm-4 col-md-3"></div>					
											
			
      <div class="panel panel-default" >

        <div class="panel-body" style="padding-left: 50px; padding-right:50px;" >
            <div id="browserNotCompatible" class="panel panel-danger" style="display: none">
                 <div class="panel-heading">Your browser does not support features required by LAMS. Please upgrade your browser.</div>
            </div>												
						<div id="login-picture" class="col-sm-12"> 
							<img src="/lams/images/svg/login-form-met.png" style="width:60%; margin-bottom: 30px;" alt="LAMS" >
						</div>
						<form action="/lams/j_security_check" method="POST" name="loginForm" role="form" class="form-horizontal" id="loginForm" autocomplete="off">
						  <input type="hidden" name="redirectURL" value='' />
              <div class="input-group">
								<input id="j_username" type="text" class="form-control" autocapitalize="off" name="j_username" value="" placeholder="Username" onkeypress="onEnter(event)" tabindex="1">
              </div>

							<div class="input-group voffset5">
								<input id="j_password" type="password" class="form-control" name="j_password" placeholder="Password" onkeypress="onEnter(event)" tabindex="2">
							</div>
							<div class="form-group voffset5" style="margin-bottom: 5px;">
							<!-- K. Dj. -->
							<!-- Button -->
								<div id = "container-for-loginBtn" class="col-sm-6 controls voffset5" style="margin-top:0px !important;">
								  <a id="loginButton" href="javascript:submitForm()" class="btn btn-primary btn-block" tabindex="3">Login</a>
								</div>						   								
							</div>
						</form>     
				</div>
			</div>
		</div>
	</div>
		</body>
	</html>
