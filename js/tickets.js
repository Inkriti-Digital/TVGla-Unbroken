$(document).ready(function(){

	// Constants
	var ZIP_DEFAULT = "ENTER ZIPCODE";

	// Variables (display)
	var getTickets = $("#get-tickets");
	var zipInput = $("#zipInput");
	var fandangoButton = $("#fandangoButton");
	var movieTicketsButton = $("#movieTicketsButton");
	
	var fandangoURL = "http://www.fandango.com/unbroken_163038/movietimes?location=";
	var movieticketsURL = "http://www.movietickets.com/movie/mid/167266/SearchZip/";


	// Init
	zipInput.val(ZIP_DEFAULT);

	// Intro animation
	getTickets.hide();
	setTimeout(function() {
		getTickets.fadeIn(400);
	}, 2300);


	// Event Listeners

	// Restrict zipcode to numeric
    zipInput.keyup(function () { 
        this.value = this.value.replace(/[^0-9\.]/g,'');
    });

    // On pressing Enter
    zipInput.keypress(function(e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
        	// do enter task
        }
    });

    zipInput.focus(function() {
        if ($(this).val() == ZIP_DEFAULT) {
            $(this).val('');
            // $(this).css('color', '#f7ab17');
        }
    });

    zipInput.blur(function() {
        if ($(this).val() == '') {
            $(this).val(ZIP_DEFAULT);
            // $(this).css('color', '#5c5c5c');
        }
    });

    movieTicketsButton.click(function() {
    	if (zipInput.val() == ZIP_DEFAULT)
    		return;

    	var url = movieticketsURL + zipInput.val();
    	window.open(url, "_blank");
    });

    fandangoButton.click(function() {
    	if (zipInput.val() == ZIP_DEFAULT)
    		return;

    	var url = fandangoURL + zipInput.val();
    	window.open(url, "_blank");
    });

});