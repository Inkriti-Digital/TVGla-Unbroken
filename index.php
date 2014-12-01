<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Unbroken</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="css/styles.css">

		<!-- LIGHTBOX -->
			<!-- <link rel="stylesheet" href="css/screen.css"> -->
			<link rel="stylesheet" href="css/lightbox.css">



		<!-- REMOVE BEFORE LAUNCH -->
		<meta name="robots" content="noindex">
		<!--  -->
		<!--  -->
	</head>
	<body>
		<!--FACEBOOK MASTER SHARE SCRIPT-->
			<div id="fb-root"></div>
			<script>(function(d, s, id) {
			  var js, fjs = d.getElementsByTagName(s)[0];
			  if (d.getElementById(id)) return;
			  js = d.createElement(s); js.id = id;
			  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=582191465151643&version=v2.0";
			  fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));</script>
		<!--END FACEBOOK MASTER SHARE SCRIPT-->

		<!-- Content -->
			<div class="container">

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

					<!-- TRAILER VIDEO PLAYER -->
					<?php include 'views/about.php'; ?>

					<!-- TRAILER VIDEO PLAYER -->
					<?php include 'views/resilience.php'; ?>

					<!-- TRAILER VIDEO PLAYER -->
					<?php include 'views/survival.php'; ?>

					<!-- TRAILER VIDEO PLAYER -->
					<?php include 'views/redemption.php'; ?>

					<!-- LANDING 3 COLUMN -->
					<?php include 'views/3col-landing.php'; ?>					

				</div>
				<div class="clear-fix"></div>
			</div>

		<!-- Load Scripts -->
		<script src="js/jquery-1.11.1.min.js"></script>
		<script src="js/lightbox.min.js"></script>
		<script src="js/vendors.js"></script>
		<script src="js/scripts.js"></script>

	</body>
</html>