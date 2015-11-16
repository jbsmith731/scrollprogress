var scroll = (function($) {

	var init = function() {

		// Animate body on load
	  setTimeout(function() {
	    $('body').addClass('animate-in');
	  }, 500);

	  // Set waypoints
	  $('.header-waypoint').waypoint(function(direction) { 
			$('header').toggleClass('header-fixed', direction === 'down');
		}, { offset:'500px' });

		$('.waypoint').waypoint(function(direction) {
      $(this).toggleClass($(this).data('class'), direction === 'down');
    }, {offset: '40%' });


	};
	
	return {
		init: init
	};

}(jQuery));

$(function() {
	scroll.init();
});