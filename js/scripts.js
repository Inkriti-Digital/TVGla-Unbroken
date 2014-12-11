/* UNBROKEN CUSTOM SCRIPTS - J. KIPKER */

$(function() {

	//IE 10 specific style trick
	var doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);

	//Global Vars
	var locksubNav = false;
	var subSectionOut = false;
	var mobileSite = false;
	var vidHoverFX;
	var siteAudio = document.getElementById("siteAudio"); 
	var soundOn = false;
	var firstTrailer = true;


	//audio toggle controls
	$("#soundToggle").click(function(event) {
		toggleSound();		
	});

	// toggleSound();

	function toggleSound(){
		if(soundOn == true){
	    	siteAudio.pause(); 
	    	soundOn = false;	
	    	$("#soundToggle img").attr('src', 'img/btn-soundoff.png');
	    } else if(soundOn == false){
	    	siteAudio.play();
	    	soundOn = true;
	    	$("#soundToggle img").attr('src', 'img/btn-soundon.png');
	    }	
	}

	
		//dynamic events to call on browser resize
    	$(window).resize(function() {
    		resizeElements();
	    });

	    function resizeElements(){
	    	//set width of content pillar
			var windowWidth = $(window).width();
			if(windowWidth <=768){
				mobileSite = true;
			} else{
				mobileSite = false;
			}
	

			if(mobileSite == false){
		    	var contentWidth = $('.container').width()-330;
				$('.content-pillar').css( "width", contentWidth );
				$('.page-head').css( "width", contentWidth );

				var aboutWidth = $('.content-pillar').width()-230;
				$('.synopsis').css( "width", aboutWidth );

				var overlayWidth = $('.column').width();
				$('.overlay').css( "width", overlayWidth );

				var contentHeight = $(window).height();
				$('.content-pillar .column').css( "height", contentHeight );
				$('.trailer').css( "height", contentHeight );
				// $('.section-about').css( "height", contentHeight );

				resizeNav();
			}
	    }

	    function resizeNav(){
	    	var fullHeight = $('.content-pillar').height();
			$('.nav-pillar').css( "height", fullHeight );
	    }

	    /**NAV & HOVER FUNTIONS**/
	    if(mobileSite == false){
		    //Main Nav Hover 
		     $(".nav-link").hover(function() {
			  	$(".nav-highlight", this).fadeIn();
			  }, function() {
			  	$(".nav-highlight", this).fadeOut();		    
			  }
			);

			//gallery Hover 
		     $(".thumb a").hover(function() {
			  	$(this).closest(".thumb").find(".hover-fx").fadeIn();
			  }, function() {
			  	$(this).closest(".thumb").find(".hover-fx").fadeOut();    
			  }
			);     


		    //Landing Page Column hover
		    $(".content-pillar .column").hover(
			  function() {
			  	var frameCount = 1;
			    $(".overlay", this).css( "bottom", "-30px" );
			    $('.vid-hover').attr('src', '');
			    $('.vid-hover', this).fadeIn();
			    var myId = $(this).attr('id');

			    
			    //VIDEO HOVER ANIMATION
			    if(mobileSite == false){
			    	vidHoverFX = setInterval(vidHover, 130);
				}

			  	function vidHover(){
			    	frameCount++;
			    	var imgPath="img/vid-fx/"+myId+"/frame-";
			    	var nextImage=imgPath+frameCount+".jpg";

			    	if(frameCount<=45){
				   		$('#'+myId+' .vid-hover').attr('src', nextImage);
				   	} if(frameCount>45){
				   		clearInterval(vidHoverFX);
				   		$('#'+myId+' .vid-hover').fadeOut();
				   	}
			    }


			  }, function() {
			    $(".overlay", this).css( "bottom", "-170px" );
			    clearInterval(vidHoverFX);
				
				$('.vid-hover').fadeOut();
			  }
			);

			$(".content-pillar .redemption").hover(
			  function() {
			    $(".overlay", this).css( "bottom", "0px" );
			  }, function() {
			    $(".overlay", this).css( "bottom", "-170px" );
			  }
			);

		    //legal hover over
		    $(".nav-pillar .legal").hover(
			  function() {
			    $(this).css( "bottom", "-75px" );
			  }, function() {
			    $(this).css( "bottom", "-410px" );
			  }
			);


			$(".nav-pillar .back-top a").click(function(event) {
				$(window).scrollTop(0);
			});

			$(window).scroll(function() {
				var myScroll = $('body').scrollTop();
				if(myScroll >=920 && $(window).width() > 768){
					$('.back-top').show();
					$('.back-top').css('position', 'fixed');

				} else if(myScroll < 920){
					$('.back-top').hide();
					$('.back-top').css('position', 'relative');
				}

			});

			//sub nav hover control
			 $(".nav-about").hover(function() {
			 	$('.video-nav').hide();
			  	$('.about-nav').show();
			  	locksubNav = true;
			    expandSubNav();
			  }, function() {
			  	locksubNav = false;
			  	setTimeout(function() {
			      closeSubNav();
			     }, 1500);			    
			  }
			);

			 //VIDEOS HOVER
		     $(".nav-videos").hover(function() {
			  	$('.about-nav').hide();
			  	$('.video-nav').show();
			  	locksubNav = true;
			    expandSubNav();
			  }, function() {
			  	locksubNav = false;
			  	setTimeout(function() {
			      closeSubNav();
			     }, 1500);		    
			  }
			);


			 $(".sub-nav").hover(function() {
			  	locksubNav = true;
			  }, function() {
			  	locksubNav = false;
			  	setTimeout(function() {
			      closeSubNav();
			     }, 1500);	
			  }
			);


			 //Main navigation
			 function expandSubNav(){
			 	$(".sub-nav").css( "left", "330px" );
			 }

			 function closeSubNav(){
			 	if(locksubNav ==false && subSectionOut==false){
			 		$(".sub-nav").css( "left", "0px" );
			 	}
			 }
		}


		//Section Close / Open Ctrls
			//close vid
			$(".close-vid").click(function(event) {
				event.preventDefault();
				if(firstTrailer == true){
					toggleSound();
				}
				$('#vidFrame').attr('src', '');
				$('.trailer').hide();

				if(firstTrailer == true){
					firstTrailer = false;
				}
			});


			//open vidS
			$(".btn-trailer").click(function(event) {
				event.preventDefault();				
				$('#vidFrame').attr('src', '//www.youtube.com/embed/kk1M_HwmFMM?list=PLmGmHG5_e8rLz01goWr7J5c-UrOSczdW3?rel=0&amp;autoplay=1');
			 	$('.trailer').show();
			 	if(soundOn == true){
					siteAudio.pause(); 
			    	soundOn = false;	
			    	$("#soundToggle img").attr('src', 'img/btn-soundoff.png');
				}

			});

			$(".btn-trailer2").click(function(event) {
				event.preventDefault();				
				$('#vidFrame').attr('src', '//www.youtube.com/embed/rGlsxVfCSyQ?list=PLmGmHG5_e8rLz01goWr7J5c-UrOSczdW3?rel=0&amp;autoplay=1');
			 	$('.trailer').show();
			 	if(soundOn == true){
					siteAudio.pause(); 
			    	soundOn = false;	
			    	$("#soundToggle img").attr('src', 'img/btn-soundoff.png');
				}
			});

			$(".btn-spot").click(function(event) {
				event.preventDefault();				
				$('#vidFrame').attr('src', '//www.youtube.com/embed/psmjfo_pKUk?rel=0&amp;autoplay=1');
			 	$('.trailer').show();
			 	if(soundOn == true){
					siteAudio.pause(); 
			    	soundOn = false;	
			    	$("#soundToggle img").attr('src', 'img/btn-soundoff.png');
				}
			});
			$(".btn-cbs").click(function(event) {
				event.preventDefault();				
				$('#vidFrame').attr('src', '//www.youtube.com/embed/M48tvsfpIew?rel=0&amp;autoplay=1');
			 	$('.trailer').show();
			 	if(soundOn == true){
					siteAudio.pause(); 
			    	soundOn = false;	
			    	$("#soundToggle img").attr('src', 'img/btn-soundoff.png');
				}
			});

			//open about
			$(".btn-about").click(function(event) {
				event.preventDefault();
				$('.page-redemption').hide();
				$('.page-resilience').hide();
				$('.page-survival').hide();
				resizeNav();
				subSectionOut = true;
				$('.section-about').delay(300).fadeIn();
				// resizeNav();
				//$('.column').fadeOut();
			});

			//close about
			$(".close-about").click(function(event) {
				event.preventDefault();

				subSectionOut = false;
				$('.section-about').fadeOut();
				$('.column').delay(300).fadeIn();
				closeSubNav();
				resizeNav();
			});

			//open page section
			$(".column").click(function(event) {
				event.preventDefault();
				if(mobileSite == false){
					var thisColumn = event.target.id;
					$('.column').fadeToggle();
					$(".page-"+thisColumn).delay(500).fadeIn("fast", function() {
					   resizeNav();
					});

					if(thisColumn == 'resilience'){
						$("#siteAudio").attr('src', 'audio/unb_epk_resilience_loop.mp3');
					} else if(thisColumn == 'survival'){
						$("#siteAudio").attr('src', 'audio/unb_epk_survival_loop.mp3');
					} else if(thisColumn == 'redemption'){
						$("#siteAudio").attr('src', 'audio/unb_epk_redemption_loop.mp3');
					}

					if(soundOn == true){
						siteAudio.play();
					}
				}
			});

			//close page section
			$(".section-page .close-section").click(function(event) {
				event.preventDefault();
				$('.section-page').fadeOut();
				$(".column").delay(500).fadeToggle("fast", function() {
				   resizeNav();
				});

				$("#siteAudio").attr('src', 'audio/unb_epk_main_loop.mp3');
				

				if(soundOn == true){
					siteAudio.play();
				}
			});

			$("#lb-fb-btn").click(function(event) {
				fbShareImage(_LIGHTBOX_SHARE_IMG);

			/*
				var width  = 575,
			    height = 400,
			    left   = ($(window).width()  - width)  / 2,
			    top    = ($(window).height() - height) / 2,
			    shareURL = 'http://www.unbrokenfilm.com', //'http://www.unbrokenfilm.com/?img=' + _LIGHTBOX_SHARE_ID,
			    url    = 'http://www.facebook.com/sharer.php?s=100&p[url]=' + shareURL + '&p[images][0]=http://unbroken.dev/img/logo-unbroken-sm.png&p[title]=Unbroken&p[summary]=Trailers, Cast, Media',
			    opts   = 'status=1' +
			             ',width='  + width  +
			             ',height=' + height +
			             ',top='    + top    +
			             ',left='   + left;

			window.open(url, 'lb-fb-btn', opts);
*/
			return false;
			});

			$("#lb-tw-btn").click(function(event) {
				
				var width  = 575,
		        height = 400,
		        left   = ($(window).width()  - width)  / 2,
		        top    = ($(window).height() - height) / 2,
		        shareURL = 'http://www.unbrokenfilm.com', // 'http://www.unbrokenfilm.com/?img=' + _LIGHTBOX_SHARE_ID,
		        url    = 'https://twitter.com/intent/tweet?text=' + shareURL,
		        opts   = 'status=1' +
		                 ',width='  + width  +
		                 ',height=' + height +
		                 ',top='    + top    +
		                 ',left='   + left;
		    
		    window.open(url, 'lb-tw-btn', opts);
			});

			$("#lb-tumblr-btn").click(function(event) {
				var width  = 575,
		        height = 400,
		        left   = ($(window).width()  - width)  / 2,
		        top    = ($(window).height() - height) / 2,
		        shareURL = 'http://www.unbrokenfilm.com', // 'http://www.unbrokenfilm.com/?img=' + _LIGHTBOX_SHARE_ID,
		        url    = 'http://www.tumblr.com/share/link?url=' + escape(shareURL) + '&name=UNBROKEN&description=' + escape('Angelina Jolie directs and produces Unbroken, an epic drama that follows the life of an Olympian and war hero Louis Zamperini. Learn more about the movie Unbroken from the official movie site.'),
		        opts   = 'status=1' +
		                 ',width='  + width  +
		                 ',height=' + height +
		                 ',top='    + top    +
		                 ',left='   + left;
		    
		    window.open(url, 'lb-tumblr-btn', opts);
			});

	    resizeElements();
	    addHoverVideo();

	    //ROTATOR SCRIPTS
	    jQuery(function ($) {
			var configAward = {
			    random: false,
			    transition: 'fade',
			    interval: 5000
			  };

			  window.rotator = $('#rotator-award').rotator(configAward);

			  var configCTA = {
			    random: false,
			    transition: 'fade',
			    interval: 4000
			  };

			  window.rotator = $('#rotator-cta').rotator(configCTA);

			 

			  var configResilience = {
			    random: false,
			    transition: 'fade',
			    interval: 5000
			  };

			  window.rotator = $('#rotator-resilience').rotator(configResilience);


			  var configSurvival = {
			    random: false,
			    transition: 'fade',
			    interval: 5000
			  };

			  window.rotator = $('#rotator-survival').rotator(configSurvival);

			  var configRedemption = {
			    random: false,
			    transition: 'fade',
			    interval: 5000
			  };

			  window.rotator = $('#rotator-redemption').rotator(configRedemption);

			  $('#rotator-redemption-nav').addClass('page-rotator-nav');
			  $('#rotator-survival-nav').addClass('page-rotator-nav');
			  $('#rotator-resilience-nav').addClass('page-rotator-nav');
			  
		});

		//start trailer desktop
		if(mobileSite == false){
			// $('#vidFrame').attr('src', '//www.youtube.com/embed/kk1M_HwmFMM?list=PLmGmHG5_e8rLz01goWr7J5c-UrOSczdW3?rel=0&amp;autoplay=1');

		}
		function addHoverVideo(){
	    	if(mobileSite==false){
	    		$( ".mass-image-holder" ).append( '<img src="img/vid-fx/resilience/frame-1.jpg"/><img src="img/vid-fx/resilience/frame-2.jpg"/><img src="img/vid-fx/resilience/frame-3.jpg"/><img src="img/vid-fx/resilience/frame-4.jpg"/><img src="img/vid-fx/resilience/frame-5.jpg"/><img src="img/vid-fx/resilience/frame-6.jpg"/><img src="img/vid-fx/resilience/frame-7.jpg"/><img src="img/vid-fx/resilience/frame-8.jpg"/><img src="img/vid-fx/resilience/frame-9.jpg"/><img src="img/vid-fx/resilience/frame-10.jpg"/><img src="img/vid-fx/resilience/frame-11.jpg"/><img src="img/vid-fx/resilience/frame-12.jpg"/><img src="img/vid-fx/resilience/frame-13.jpg"/><img src="img/vid-fx/resilience/frame-14.jpg"/><img src="img/vid-fx/resilience/frame-15.jpg"/><img src="img/vid-fx/resilience/frame-16.jpg"/><img src="img/vid-fx/resilience/frame-17.jpg"/><img src="img/vid-fx/resilience/frame-18.jpg"/><img src="img/vid-fx/resilience/frame-19.jpg"/><img src="img/vid-fx/resilience/frame-20.jpg"/><img src="img/vid-fx/resilience/frame-21.jpg"/><img src="img/vid-fx/resilience/frame-22.jpg"/><img src="img/vid-fx/resilience/frame-23.jpg"/><img src="img/vid-fx/resilience/frame-24.jpg"/><img src="img/vid-fx/resilience/frame-25.jpg"/><img src="img/vid-fx/resilience/frame-26.jpg"/><img src="img/vid-fx/resilience/frame-27.jpg"/><img src="img/vid-fx/resilience/frame-28.jpg"/><img src="img/vid-fx/resilience/frame-29.jpg"/><img src="img/vid-fx/resilience/frame-30.jpg"/><img src="img/vid-fx/resilience/frame-31.jpg"/><img src="img/vid-fx/resilience/frame-32.jpg"/><img src="img/vid-fx/resilience/frame-33.jpg"/><img src="img/vid-fx/resilience/frame-34.jpg"/><img src="img/vid-fx/resilience/frame-35.jpg"/><img src="img/vid-fx/resilience/frame-36.jpg"/><img src="img/vid-fx/resilience/frame-37.jpg"/><img src="img/vid-fx/resilience/frame-38.jpg"/><img src="img/vid-fx/resilience/frame-39.jpg"/><img src="img/vid-fx/resilience/frame-40.jpg"/><img src="img/vid-fx/resilience/frame-41.jpg"/><img src="img/vid-fx/resilience/frame-42.jpg"/><img src="img/vid-fx/resilience/frame-43.jpg"/><img src="img/vid-fx/resilience/frame-44.jpg"/><img src="img/vid-fx/resilience/frame-45.jpg"/><img src="img/vid-fx/survival/frame-1.jpg"/><img src="img/vid-fx/survival/frame-2.jpg"/><img src="img/vid-fx/survival/frame-3.jpg"/><img src="img/vid-fx/survival/frame-4.jpg"/><img src="img/vid-fx/survival/frame-5.jpg"/><img src="img/vid-fx/survival/frame-6.jpg"/><img src="img/vid-fx/survival/frame-7.jpg"/><img src="img/vid-fx/survival/frame-8.jpg"/><img src="img/vid-fx/survival/frame-9.jpg"/><img src="img/vid-fx/survival/frame-10.jpg"/><img src="img/vid-fx/survival/frame-11.jpg"/><img src="img/vid-fx/survival/frame-12.jpg"/><img src="img/vid-fx/survival/frame-13.jpg"/><img src="img/vid-fx/survival/frame-14.jpg"/><img src="img/vid-fx/survival/frame-15.jpg"/><img src="img/vid-fx/survival/frame-16.jpg"/><img src="img/vid-fx/survival/frame-17.jpg"/><img src="img/vid-fx/survival/frame-18.jpg"/><img src="img/vid-fx/survival/frame-19.jpg"/><img src="img/vid-fx/survival/frame-20.jpg"/><img src="img/vid-fx/survival/frame-21.jpg"/><img src="img/vid-fx/survival/frame-22.jpg"/><img src="img/vid-fx/survival/frame-23.jpg"/><img src="img/vid-fx/survival/frame-24.jpg"/><img src="img/vid-fx/survival/frame-25.jpg"/><img src="img/vid-fx/survival/frame-26.jpg"/><img src="img/vid-fx/survival/frame-27.jpg"/><img src="img/vid-fx/survival/frame-28.jpg"/><img src="img/vid-fx/survival/frame-29.jpg"/><img src="img/vid-fx/survival/frame-30.jpg"/><img src="img/vid-fx/survival/frame-31.jpg"/><img src="img/vid-fx/survival/frame-32.jpg"/><img src="img/vid-fx/survival/frame-33.jpg"/><img src="img/vid-fx/survival/frame-34.jpg"/><img src="img/vid-fx/survival/frame-35.jpg"/><img src="img/vid-fx/survival/frame-36.jpg"/><img src="img/vid-fx/survival/frame-37.jpg"/><img src="img/vid-fx/survival/frame-38.jpg"/><img src="img/vid-fx/survival/frame-39.jpg"/><img src="img/vid-fx/survival/frame-40.jpg"/><img src="img/vid-fx/survival/frame-41.jpg"/><img src="img/vid-fx/survival/frame-42.jpg"/><img src="img/vid-fx/survival/frame-43.jpg"/><img src="img/vid-fx/survival/frame-44.jpg"/><img src="img/vid-fx/survival/frame-45.jpg"/><img src="img/vid-fx/redemption/frame-1.jpg"/><img src="img/vid-fx/redemption/frame-2.jpg"/><img src="img/vid-fx/redemption/frame-3.jpg"/><img src="img/vid-fx/redemption/frame-4.jpg"/><img src="img/vid-fx/redemption/frame-5.jpg"/><img src="img/vid-fx/redemption/frame-6.jpg"/><img src="img/vid-fx/redemption/frame-7.jpg"/><img src="img/vid-fx/redemption/frame-8.jpg"/><img src="img/vid-fx/redemption/frame-9.jpg"/><img src="img/vid-fx/redemption/frame-10.jpg"/><img src="img/vid-fx/redemption/frame-11.jpg"/><img src="img/vid-fx/redemption/frame-12.jpg"/><img src="img/vid-fx/redemption/frame-13.jpg"/><img src="img/vid-fx/redemption/frame-14.jpg"/><img src="img/vid-fx/redemption/frame-15.jpg"/><img src="img/vid-fx/redemption/frame-16.jpg"/><img src="img/vid-fx/redemption/frame-17.jpg"/><img src="img/vid-fx/redemption/frame-18.jpg"/><img src="img/vid-fx/redemption/frame-19.jpg"/><img src="img/vid-fx/redemption/frame-20.jpg"/><img src="img/vid-fx/redemption/frame-21.jpg"/><img src="img/vid-fx/redemption/frame-22.jpg"/><img src="img/vid-fx/redemption/frame-23.jpg"/><img src="img/vid-fx/redemption/frame-24.jpg"/><img src="img/vid-fx/redemption/frame-25.jpg"/><img src="img/vid-fx/redemption/frame-26.jpg"/><img src="img/vid-fx/redemption/frame-27.jpg"/><img src="img/vid-fx/redemption/frame-28.jpg"/><img src="img/vid-fx/redemption/frame-29.jpg"/><img src="img/vid-fx/redemption/frame-30.jpg"/><img src="img/vid-fx/redemption/frame-31.jpg"/><img src="img/vid-fx/redemption/frame-32.jpg"/><img src="img/vid-fx/redemption/frame-33.jpg"/><img src="img/vid-fx/redemption/frame-34.jpg"/><img src="img/vid-fx/redemption/frame-35.jpg"/><img src="img/vid-fx/redemption/frame-36.jpg"/><img src="img/vid-fx/redemption/frame-37.jpg"/><img src="img/vid-fx/redemption/frame-38.jpg"/><img src="img/vid-fx/redemption/frame-39.jpg"/><img src="img/vid-fx/redemption/frame-40.jpg"/><img src="img/vid-fx/redemption/frame-41.jpg"/><img src="img/vid-fx/redemption/frame-42.jpg"/><img src="img/vid-fx/redemption/frame-43.jpg"/><img src="img/vid-fx/redemption/frame-44.jpg"/><img src="img/vid-fx/redemption/frame-45.jpg"/>' );
	    	}
	    }



	//MOBILE FUNCTIONS
	if(mobileSite == true){		
		jQuery(function ($) {
			// $('.nav-pillar').css('height', 1862);
		});
	}


	var mobileNavClick = false;
	$('.hamburger').click(function(event){
		if(mobileSite == true){		
			$('.m-nav-box').show();
		}
	});

	$('.nav-close').click(function(event){
		if(mobileSite == true){	
			$('.m-nav-box').hide();
		}
	});

	$('.nav-about').click(function(event){	
		if(mobileSite == true){	
			$('.m-nav-box').hide();
			$('.m-about').show();
			$('.nav-slider').hide();
			$('.nav-pillar').css('height', 1862);
			$('.nav-pillar .nav-slider').hide();
		}
	});

	$('#resilience').click(function(event){	
		if(mobileSite == true){	
			window.location.href = "m-resilience.php";
		}
	});

	$('#redemption').click(function(event){	
		if(mobileSite == true){	
			window.location.href = "m-redemption.php";
		}
	});

	$('#survival').click(function(event){	
		if(mobileSite == true){	
			window.location.href = "m-survival.php";
		}
	});




	/****  New Scripts (12/8/2014) ****/

	function getParameterByName(name) {
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	        results = regex.exec(location.search);
	    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

	var urlParam_img = getParameterByName('img');

	if (urlParam_img != '') {
		// Show the lightbox
		$("#lightbox-" + urlParam_img).click();
		_LIGHTBOX_SHARE_ID = urlParam_img;

		// Hide the trailer elements
		if (firstTrailer == true){
			toggleSound();
			firstTrailer = false;
		}

		$('#vidFrame').attr('src', '');
		$('.trailer').hide();
	} else if (mobileSite == false) {
		// If no lightbox and is desktop site, show the video
		$('#vidFrame').attr('src', '//www.youtube.com/embed/kk1M_HwmFMM?list=PLmGmHG5_e8rLz01goWr7J5c-UrOSczdW3?rel=0&amp;autoplay=1');
	}

	// Share the site on facebook with a specific image
	//  reference: https://developers.facebook.com/docs/sharing/reference/feed-dialog/v2.2
	function fbShareImage(imageURL) {
		FB.ui({
		  method: 'feed',
		  link: 'http://www.unbrokenfilm.com',
		  // description: 'Angelina Jolie directs and produces Unbroken, an epic drama that follows the life of an Olympian and war hero Louis Zamperini. Learn more about the movie Unbroken from the official movie site.',
		  picture: imageURL
		}, function(response){});
	}


});


$(document).ready(function() {
	/* Lighbox share event listeners */
	$(".lightbox-link").click(function() {
		_LIGHTBOX_SHARE_ID = $(this).attr('data-shareid');
		_LIGHTBOX_SHARE_IMG = $(this).attr('data-shareimg');
	});

});


// Used to keep track of lighbox share id
var _LIGHTBOX_SHARE_ID;	
var _LIGHTBOX_SHARE_IMG;




