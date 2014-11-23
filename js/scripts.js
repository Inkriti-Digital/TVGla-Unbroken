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



	    resizeElements();
});
