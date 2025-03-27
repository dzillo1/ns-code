$(function() {
    if (window.location.hash === '#promo-offer') {   
        $('.next-order a:first-of-type').click();
        $('#couponNumber').val($('#couponNumber').val() + 'g6m56hvp');
        $('html,body').animate({
            scrollTop: $("#promoForm").offset().top
        }, 5000);
    }
});
