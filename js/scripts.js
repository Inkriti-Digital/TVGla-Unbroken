/* UNBROKEN CUSTOM SCRIPTS - J. KIPKER */

$(function() {

	//Global Vars
	var locksubNav = false;
	var subSectionOut = false;
	var mobileSite = false;
	var vidHoverFX;

	
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
			console.log(mobileSite);

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
			    
			    //VIDEO HOVER ANIMATION
			    // vidHoverFX = setInterval(vidHover, 60);

			    function vidHover(){
			    	frameCount++;
			    	var imgPath="img/vid-fx/resilience/unb_570x810_resilience_0";
			    	var nextImage=imgPath+frameCount+".png";
			    	console.log(frameCount);

			    	if(frameCount<=90){
				   		$('.vid-hover').attr('src', nextImage);
				   	} if(frameCount>90){
				   		clearInterval(vidHoverFX);
				   		$('.vid-hover').attr('src', 'img/vid-fx/resilience/unb_570x810_resilience_08.png');
				   	}
			    }


			  }, function() {
			    $(".overlay", this).css( "bottom", "-170px" );
			    clearInterval(vidHoverFX);
				$('.vid-hover').attr('src', 'img/vid-fx/resilience/unb_570x810_resilience_08.png');
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
			    $(this).css( "bottom", "-40px" );
			  }, function() {
			    $(this).css( "bottom", "-410px" );
			  }
			);

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

		if(mobileSite == false){
			//close vid
			$(".close-vid").click(function(event) {
				event.preventDefault();
				$('#vidFrame').attr('src', '');
				$('.trailer').hide();
			});


			//open vidS
			$(".btn-trailer").click(function(event) {
				event.preventDefault();
				$('#vidFrame').attr('src', '//www.youtube.com/embed/kk1M_HwmFMM?list=PLmGmHG5_e8rLz01goWr7J5c-UrOSczdW3?rel=0&amp;autoplay=1');
			 	$('.trailer').show();
			});

			$(".btn-trailer2").click(function(event) {
				event.preventDefault();
				$('#vidFrame').attr('src', '//www.youtube.com/embed/rGlsxVfCSyQ?list=PLmGmHG5_e8rLz01goWr7J5c-UrOSczdW3?rel=0&amp;autoplay=1');
			 	$('.trailer').show();
			});

			$(".btn-spot").click(function(event) {
				event.preventDefault();
				$('#vidFrame').attr('src', '//www.youtube.com/embed/psmjfo_pKUk?rel=0&amp;autoplay=1');
			 	$('.trailer').show();
			});
			$(".btn-cbs").click(function(event) {
				event.preventDefault();
				$('#vidFrame').attr('src', '//www.youtube.com/embed/M48tvsfpIew?rel=0&amp;autoplay=1');
			 	$('.trailer').show();
			});

			//open about
			$(".btn-about").click(function(event) {
				event.preventDefault();
				subSectionOut = true;
				$('.section-about').delay(500).fadeIn();
				$('.column').fadeToggle();
			});

			//close about
			$(".close-about").click(function(event) {
				event.preventDefault();
				subSectionOut = false;
				$('.section-about').fadeOut();
				$('.column').delay(500).fadeToggle();
				closeSubNav();
			});

			//open page section
			$(".column").click(function(event) {
				event.preventDefault();
				var thisColumn = event.target.id;
				$('.column').fadeToggle();
				$(".page-"+thisColumn).delay(500).fadeIn("fast", function() {
				   resizeNav();
				});
			});

			//close page section
			$(".section-page .close-section").click(function(event) {
				event.preventDefault();
				$('.section-page').fadeOut();
				$(".column").delay(500).fadeToggle("fast", function() {
				   resizeNav();
				});
			});
		}

	    resizeElements();


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
		$('#vidFrame').attr('src', '//www.youtube.com/embed/kk1M_HwmFMM?list=PLmGmHG5_e8rLz01goWr7J5c-UrOSczdW3?rel=0&amp;autoplay=1');
	}



	//MOBILE FUNCTIONS
	var mobileNavClick = false;
	$('.hamburger').click(function(event){		
		$('.nav-box .m-nav').toggle();

		if(mobileNavClick == false){
			$('.content-pillar').css('top', '400px');
			mobileNavClick = true;
		} else if(mobileNavClick == true){
			$('.content-pillar').css('top', '190px');
			mobileNavClick = false;
		}

	});
});
