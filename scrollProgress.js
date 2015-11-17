(function ( $ ) {

  $.fn.scrollProgress = function( options ) {

    // Set default settings
    var settings = $.extend({
      height          : 4,
      backgroundColor : "rgba(246,36,89, 0.75)",
      opacity         : null,
      offset          : null
    }, options);

     // Add progress div to html
    $('body').prepend('<div id="progress"></div>');

    // Set default CSS options
    $('head').append('<style type="text/css">#progress { height:' + settings.height + 'px; background-color:' + settings.backgroundColor + ';' + (settings.opacity != null ? 'opacity:' + settings.opacity + ';': '') + ' position: fixed; top: 0; left: 0 } </style>');

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