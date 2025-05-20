$(function() {
    /* scroll cards right/left */
    $(document).on('click', '.scroll-right', function() {
        var $target = $(this).closest('.card-mid').next('.card-container').find('.card-row');
        console.log($target);
        if ($target.length > 0) {
            $target.animate({ scrollLeft: '+=460' }, 1000);
            $(this).parent().find(".scroll-left").show();
        } else {
            console.error('Element with class "card-row" not found');
        }
    });
    
    $(document).on('click', '.scroll-left', function() {
        var $target = $(this).closest('.card-mid').next('.card-container').find('.card-row');
        console.log($target);
        if ($target.length > 0) {
            $target.animate({ scrollLeft: '-=460' }, 1000);
            $(this).parent().find(".scroll-right").removeClass("disabled");
        } else {
            console.error('Element with class "card-row" not found');
        }
    });

/*at end of rt scroll add class to scroll rt */
$('.card-row').scroll(function () {
    var $elem = $(this);
    var newScrollLeft = $elem.scrollLeft(),
      width = $elem.width(),
      scrollWidth = $elem.get(0).scrollWidth;
    var offset = 1; // adjust this value as needed
    if (scrollWidth - newScrollLeft - width <= offset) {
      $elem.closest('.card-container').prev('.card-mid').find('.scroll-right').addClass('disabled');
    } else {
      $elem.closest('.card-container').prev('.card-mid').find('.scroll-right').removeClass('disabled');
    }
    if (newScrollLeft === 0) {
      // do something when scrolled to leftmost position
    }
  });
});

