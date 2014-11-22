/* UNBROKEN CUSTOM SCRIPTS - J. KIPKER */

$(function() {
	
    	$(window).resize(function() {
    		resizeElements();
	    });

	    function resizeElements(){
	    	//set width of content pillar
	    	var contentWidth = contentWidth = $('.container').width()-330;
			$('.content-pillar').css( "width", contentWidth );
	    }

	    resizeElements();
});
