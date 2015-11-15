(function ( $ ) {

  $.fn.scrollProgress = function( options ) {

    // Add progress div to html
    $('body').prepend('<div id="progress"></div>');

    // Set default settings
    var settings = $.extend({
      height: 4,
      backgroundColor: "#F62459",
      opacity: 0.75,
      offset: '',
    }, options);

    // Set default CSS options
    $('#progress').css({
      height: settings.height,
      'background-color': settings.backgroundColor,
      opacity: settings.opacity,
      position: 'fixed',
      top: 0,
      left: 0,
    })
    
    // Scroll function
    $(window).on('load scroll resize', function() {

      var docHeight = $(document).height();
      var windowPos = $(window).scrollTop();
      var windowHeight = $(window).height();
      var windowWidth = $(window).width();
      var completion = windowPos / (docHeight - windowHeight - settings.offset);
      
      // Set progress bar to 100% width if page does not scroll
      if (docHeight <= windowHeight) {
        $('#progress').width(windowWidth);
      } else {
        $('#progress').width(completion * windowWidth);
      }

    });

  }

}( jQuery ));