<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Unbroken – Trailers, Cast & Photos</title>
		<meta name="description" content="Angelina Jolie directs and produces Unbroken, an epic drama that follows the life of an Olympian and war hero Louis Zamperini." />
		<meta name="viewport" content="width=640, maximum-scale=1">

		<!-- Favicon -->
    	<link rel="shortcut icon" href="favicon.png" />

    	<!-- Facebook OpenGraph description -->
	    <meta property="og:title" content="Unbroken" />
	    <meta property="og:description" content="Angelina Jolie directs and produces Unbroken, an epic drama that follows the life of an Olympian and war hero Louis Zamperini." />
	    <meta property="og:image" content="http://www.unbrokenfilm.com/img/misc/facebookShare.jpg">
		
		
		<!-- STYLES -->
		<link rel="stylesheet" href="css/styles.min.css">
		<!-- LIGHTBOX -->
		<link rel="stylesheet" href="css/lightbox.css">

		<link rel="stylesheet" type="text/css" href="css/ie-styles.css" />

		<!--[if IE]>
			<link rel="stylesheet" type="text/css" href="css/ie9-styles.css" />
		<![endif]-->
	</head>
	<body>
		<!--FACEBOOK MASTER SHARE SCRIPT-->
			<div id="fb-root"></div>
			<script>(function(d, s, id) {
			  var js, fjs = d.getElementsByTagName(s)[0];
			  if (d.getElementById(id)) return;
			  js = d.createElement(s); js.id = id;
			  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=556047527751150&version=v2.0";
			  fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));</script>
		<!--END FACEBOOK MASTER SHARE SCRIPT-->

		<!-- Content -->
		<div class="container">
			

			<!-- MOBILE LAYOUT -->
			<?php include 'views/mobile.php'; ?>			

				<!--Main Sidebar Navigation-->
				<div class="nav-pillar">

					<!-- MAIN NAV -->
					<?php include 'views/main-nav.php'; ?>

					<!-- SUB NAV HEADER -->
					<?php include 'views/sub-nav.php'; ?>					
					
				</div>
				<!--End Main Sidebar Navigation-->

				<div class="content-pillar">

					<!-- TRAILER VIDEO PLAYER -->
					<?php include 'views/trailer.php'; ?>

					<!-- SYNOPSIS SECTION -->
					<?php include 'views/about.php'; ?>

					<!-- PAGE RESILIENCE -->
					<?php include 'views/resilience.php'; ?>

					<!-- PAGE SURVIVAL -->
					<?php include 'views/survival.php'; ?>

					<!-- PAGE REDEMPTION -->
					<?php include 'views/redemption.php'; ?>

					<!-- LANDING 3 COLUMN -->
					<?php include 'views/3col-landing.php'; ?>					

				</div>
				<div class="clear-fix"></div>
			</div>

		<!-- Load Scripts -->
		<script src="js/jquery-1.11.1.min.js"></script>
		<script src="js/lightbox.js"></script>
		<script src="js/rotator.js"></script>
		<script src="js/tickets.js"></script>
		<!--script src="js/audio.min.js"></script-->
		<!--script src="js/vendors.js"></script-->
		<script src="js/scripts.js"></script>


		<div class="mass-image-holder" style="display: none !important; height: 0; width: 0;"></div>
	</body>
</html>