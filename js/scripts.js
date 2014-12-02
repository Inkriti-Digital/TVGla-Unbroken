/* UNBROKEN CUSTOM SCRIPTS - J. KIPKER */

$(function() {

	//Global Vars
	var locksubNav = false;
	var subSectionOut = false;
	
		//dynamic events to call on browser resize
    	$(window).resize(function() {
    		resizeElements();
	    });

	    function resizeElements(){
	    	//set width of content pillar
	    	var contentWidth = contentWidth = $('.container').width()-330;
			$('.content-pillar').css( "width", contentWidth );

			var aboutWidth = $('.content-pillar').width()-230;
			$('.synopsis').css( "width", aboutWidth );

			var overlayWidth = $('.column').width();
			$('.overlay').css( "width", overlayWidth );
	    }

	    /**NAV & HOVER FUNTIONS**/

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
		    $(".overlay", this).css( "bottom", "-30px" );
		  }, function() {
		    $(".overlay", this).css( "bottom", "-170px" );
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


		//Section Close / Open Ctrls

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
			$('.section-about').fadeIn();
		});

		//close about
		$(".close-about").click(function(event) {
			event.preventDefault();
			subSectionOut = false;
			$('.section-about').fadeOut();
			closeSubNav();
		});

		//open resilience
		$(".resilience").click(function(event) {
			event.preventDefault();
			$('.page-resilience').fadeIn();
		});

		//close resilience
		$(".page-resilience .close-section").click(function(event) {
			event.preventDefault();
			$('.page-resilience').fadeOut();
		});


		//open survival
		$(".survival").click(function(event) {
			event.preventDefault();
			$('.page-survival').fadeIn();
		});

		//close survival
		$(".page-survival .close-section").click(function(event) {
			event.preventDefault();
			$('.page-survival').fadeOut();
		});


		//open survival
		$(".redemption").click(function(event) {
			event.preventDefault();
			$('.page-redemption').fadeIn();
		});

		//close survival
		$(".page-redemption .close-section").click(function(event) {
			event.preventDefault();
			$('.page-redemption').fadeOut();
		});

	    resizeElements();
});
