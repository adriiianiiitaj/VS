<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="apple-touch-icon" href="../apple-touch-icon.png">
  <link rel="icon" href="favicon.ico"  type="image/x-icon">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<!--[if lt IE 9]>
      <script src="../js/vendor/html5-3.6-respond-1.4.2.min.js"></script>
  <![endif]-->
  
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="css/main.css">
  
  <script type="text/javascript" src="js/jquery.min.js"></script>
</head>
<body>
	<?php 
    require_once('views/menu.html');
  ?>
<div class="container padding">	
	<form class="form-horizontal col-lg-7" method="post" role="form" onsubmit="return validate()" data-validate>
		<fieldset>
			<legend><span class="btn-info">New Account</span></legend>
			<div  class="form-group">
				<label for="name" class="col-lg-2 control-label text-left">Name</label>
				<div class="col-lg-10">
					<input class="form-control " id="name" name="name" type="text" placeholder="Name" data-required data-name/>
				</div>
			</div>

			<div  class="form-group">			
				<label for="lastname" class="col-lg-2 control-label text-left">Last name</label>
				<div class="col-lg-10">
					<input class="form-control" id="lastname" name="lastname" type="text" placeholder="Last Name" data-required data-lastname/>
				</div>
			</div>

			<div class="form-group">											
				<label for="email" class="col-lg-2 control-label text-left"> Email Address</label>
				<div class="col-lg-10">
					<input class="form-control" type="text" name="email" id="email" placeholder="Email" data-required data-email/>
				</div>
			</div>

			<div class="form-group">
				<label for="password" class="col-lg-2 control-label text-left"> Password </label>
				<div class="col-lg-10">
					<input class="form-control" type="password" name="password" placeholder="Password" data-required data-password data-samepassword/>
				</div>
			</div>

			<div  class="form-group">
				<label type="Confirmpass" class="col-lg-2 control-label text-left">Confirm password</label>
				<div class="col-lg-10">
					<input class="form-control" type="password" name="Confirmpass" placeholder="Confirm Passsword" data-required data-password data-samepassword/>
				</div>
			</div>

			<div  class="form-group">
				<label class="col-lg-2 control-label text-left" for="gender">Gender</label>
				<div class="col-lg-10">
					<label class="radio-inline"  for="fem">Female</label>
					<input type="radio" name="gender" id="fem" value="Female" checked="checked"/>							
					<label class="radio-inline"  for="male">Male</label>	
					<input type="radio" name="gender" id="male" value="Male"/>		
				</div>			
			</div>
		
			<div  class="form-group">
				<label for="bday" class="col-lg-2 control-label text-left">Birthday</label>
				<div class="col-lg-10">
					<input class="form-control" type="date" id="bday" name="bday" placeholder="Birthday DD/MM/YY" data-required/>
				</div>
			</div>

			<div class="form-group">
				<label for="phone" class="col-lg-2 control-label text-left">Phone Number</label>
	      <div class="col-lg-10">
	        <input class="form-control" type="tel" id="phone" name="phone" placeholder="Phone Number" data-required/>
				</div>
			</div>

			<div class="form-group padding-left-15">
				<button class="btn btn-orange" type="submit"><i class="fa fa-paper-plane"></i> Create Account </button>
			</div>
		</fieldset>
	</form>
	<div class="col-lg-5">
		<figure class="padding-top-50">
			<img id="img-buy-online" class="" src="img/buy.jpg"/>
		</figure>
	</div>
</div>
  <footer>
      <nav class="col-md-3 pull-right" id="social-icons">
        <ul>
          <li><a href="https://www.facebook.com/"><img class="social-icon" src="img/fb.png"></a></li>
          <li><a href="https://twitter.com/"><img class="social-icon" src="img/tw.png"></a></a></li>
          <li><a href="https://www.google.com.mx/"><img class="social-icon" src="img/gg.png"></a></a></li>
          <li><a href="contacto.php"><img class="social-icon" src="img/mail.png"></a></a></li>
        </ul>
      </nav>
    </footer> 
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.js"></script>
      <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.js"><\/script>')</script>
      <script src="js/vendor/bootstrap.min.js"></script>
      <script src="js/plugins.js"></script>
      <script src="js/main.js"></script>
      <script src="js/owl.carousel.js"></script>
      <script src="js/validator.js"></script>
  </body>
</html>