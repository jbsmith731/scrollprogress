var scroll = (function($) {

	var init = function() {


	  setTimeout(function() {
	    $('body').addClass('animate-in');
	  }, 500);


	};
	
	return {
		init: init
	};

}(jQuery));

$(function() {
	scroll.init();
});