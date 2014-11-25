/* UNBROKEN CUSTOM SCRIPTS - J. KIPKER */

$(function() {
	
		//dynamic events to call on browser resize
    	$(window).resize(function() {
    		resizeElements();
	    });

	    function resizeElements(){
	    	//set width of content pillar
	    	var contentWidth = contentWidth = $('.container').width()-330;
			$('.content-pillar').css( "width", contentWidth );
	    }

	    /**NAV & HOVER FUNTIONS**/

	    //Landing Page Column hover
	    $(".content-pillar .column").hover(
		  function() {
		    $(".overlay", this).css( "bottom", "0px" );
		  }, function() {
		    $(".overlay", this).css( "bottom", "-140px" );
		  }
		);

	    //legal hover over
	    $(".nav-pillar .legal").hover(
		  function() {
		    $(this).css( "bottom", "0px" );
		  }, function() {
		    $(this).css( "bottom", "-400px" );
		  }
		);

		//sub nav hover
		 $(".nav-about").hover(
		  function() {
		  	console.log("hover");
		    expandSubNav();
		  }, function() {
		    closeSubNav();
		  }
		);

		 //Main navigation
		 function expandSubNav(){
		 	$(".sub-nav").css( "left", "330px" );
		 }

		 function closeSubNav(){
		 	$(".sub-nav").css( "left", "0px" );
		 }


		//Youtube Close / Open Ctrls

		//close vid
		$(".close-vid").click(function(event) {
			event.preventDefault();
			$('#vidFrame').attr('src', '');
			$('.trailer').hide();
		});


		//open vid
		$(".nav-videos").click(function() {
			$('#vidFrame').attr('src', '//www.youtube.com/embed/kk1M_HwmFMM?list=PLmGmHG5_e8rLz01goWr7J5c-UrOSczdW3?rel=0&amp;autoplay=1');
		 $('.trailer').show();

		});


	    resizeElements();
});
