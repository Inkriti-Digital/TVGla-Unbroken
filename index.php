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
		<link rel="stylesheet" href="css/styles2.css">
		
		<!-- LIGHTBOX -->
		<link rel="stylesheet" href="css/lightbox.css">

		<link rel="stylesheet" type="text/css" href="css/ie-styles.css" />

		<!-- Location Check -->
	    <script src="//js.maxmind.com/js/country.js" type="text/javascript"></script>

		<!--[if IE]>
			<link rel="stylesheet" type="text/css" href="css/ie9-styles.css" />
		<![endif]-->
	</head>
	<body>

		<script>
		  window.fbAsyncInit = function() {
		    FB.init({
		      appId      : '1403486333276432',
		      xfbml      : true,
		      version    : 'v2.2'
		    });
		  };

		  (function(d, s, id){
		     var js, fjs = d.getElementsByTagName(s)[0];
		     if (d.getElementById(id)) {return;}
		     js = d.createElement(s); js.id = id;
		     js.src = "//connect.facebook.net/en_US/sdk.js";
		     fjs.parentNode.insertBefore(js, fjs);
		   }(document, 'script', 'facebook-jssdk'));
		</script>

		<!--FACEBOOK MASTER SHARE SCRIPT-->
			<!-- <div id="fb-root"></div> -->
			<script>
			// (function(d, s, id) {
			//   var js, fjs = d.getElementsByTagName(s)[0];
			//   if (d.getElementById(id)) return;
			//   js = d.createElement(s); js.id = id;
			//   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=556047527751150&version=v2.0";
			//   fjs.parentNode.insertBefore(js, fjs);
			// }(document, 'script', 'facebook-jssdk'));

			</script>
		<!--END FACEBOOK MASTER SHARE SCRIPT-->

		<!-- Links to click for default lightbox -->
		<div class="default-lightbox">
			<a href="img/resilience/resilience-lg4.jpg" data-lightbox="resilience-default" data-title="" id="lightbox-resilience4"></a>
			<a href="img/resilience/resilience-lg5.jpg" data-lightbox="resilience-default" data-title="" id="lightbox-resilience5"></a>
			<a href="img/resilience/resilience-lg6.jpg" data-lightbox="resilience-default" data-title="" id="lightbox-resilience6"></a>
			<a href="img/resilience/resilience-lg7.jpg" data-lightbox="resilience-default" data-title="" id="lightbox-resilience7"></a>
			<a href="img/resilience/resilience-lg8.jpg" data-lightbox="resilience-default" data-title="" id="lightbox-resilience8"></a>
			
			<a href="img/survival/survival-lg4.jpg" data-lightbox="survival-default" data-title="" id="lightbox-survival4"></a>
			<a href="img/survival/survival-lg5.jpg" data-lightbox="survival-default" data-title="" id="lightbox-survival5"></a>
			<a href="img/survival/survival-lg6.jpg" data-lightbox="survival-default" data-title="" id="lightbox-survival6"></a>
			<a href="img/survival/survival-lg7.jpg" data-lightbox="survival-default" data-title="" id="lightbox-survival7"></a>
			<a href="img/survival/survival-lg8.jpg" data-lightbox="survival-default" data-title="" id="lightbox-survival8"></a>
			
			<a href="img/redemption/redemption-lg4.jpg" data-lightbox="redemption-default" data-title="" id="lightbox-redemption4"></a>
			<a href="img/redemption/redemption-lg5.jpg" data-lightbox="redemption-default" data-title="" id="lightbox-redemption5"></a>
			<a href="img/redemption/redemption-lg6.jpg" data-lightbox="redemption-default" data-title="" id="lightbox-redemption6"></a>
			<a href="img/redemption/redemption-lg7.jpg" data-lightbox="redemption-default" data-title="" id="lightbox-redemption7"></a>
			<a href="img/redemption/redemption-lg8.jpg" data-lightbox="redemption-default" data-title="" id="lightbox-redemption8"></a>
			<a href="img/redemption/redemption-lg9.jpg" data-lightbox="redemption-default" data-title="" id="lightbox-redemption9"></a>
		</div>

		
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
		<!--script src="js/hammer.min.js"></script-->
		<!--script src="js/vendors.js"></script-->
		<script src="js/scripts.js"></script>
		<script src="js/mobile-carousel.js"></script>


		<div class="mass-image-holder" style="display: none !important; height: 0; width: 0;"></div>
	</body>
</html>