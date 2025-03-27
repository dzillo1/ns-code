$('.mobile-sticky').hide();
let isFooterVisible = false;

$(document).scroll(function() {
    var y = $(this).scrollTop();
    var footerOffset = $('footer').offset().top;
    var windowHeight = $(window).height();
    var scrollPosition = y + windowHeight;

    if (scrollPosition >= footerOffset) {
        isFooterVisible = true;
    } else {
        isFooterVisible = false;
    }

    if (y > 80 && isFooterVisible === false) {
        $('.mobile-sticky').fadeIn();
    } else {
        $('.mobile-sticky').fadeOut();
    }
});
