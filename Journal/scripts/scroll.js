$(document).ready(function() {
  $.fn.isInViewport = function() {
    var elementLeft = $(this).offset().left;
    var elementRight = elementLeft + $(this).outerWidth();


    var viewportLeft = 0;
    var viewportRight = viewportLeft + $(window).width();

    return elementRight-(viewportRight/5) <= viewportRight && elementLeft+(viewportRight/5) >= viewportLeft;
  };

  $(window).on('resize scroll', function() {
    $('.daybox').each(function() {
        var activeDate = $(this).attr('id');
      if ($(this).isInViewport()) {
        $('#Bubble' + activeDate).addClass('timelineBubble-active');
      } else {
        $('#Bubble' + activeDate).removeClass('timelineBubble-active');
      }
    });


  });
});
