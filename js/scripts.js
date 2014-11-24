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

	    /**BUTTON & HOVER FUNTIONS**/

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


		//Youtube Close / Open Ctrls

		//close vid
		$(".close-vid").click(function() {
		 $('#vidFrame').attr('src', '');
		 $('.trailer').hide();
		});


		//open vid
		$(".view-trailer").click(function() {
			$('#vidFrame').attr('src', '//www.youtube.com/embed/kk1M_HwmFMM?list=PLmGmHG5_e8rLz01goWr7J5c-UrOSczdW3?autoplay=1');
		 $('.trailer').show();

		});


	    resizeElements();
});
