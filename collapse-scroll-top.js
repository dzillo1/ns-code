$(function () {
    $('.below-hero .panel-collapse, .faqs .panel-collapse').on('shown.bs.collapse', function (e) {
        var $panel = $(this).closest('.panel');
        $('html, body').stop(true, true).animate({
            scrollTop: $panel.offset().top
        }, 200);
    });

    $("h4.accordion>a").click(function () {
        var c = $(this).parent(".accordion");
        c.toggleClass("active-tab");
        if (c.hasClass("active-tab")) {
            $("html, body").stop(true, true).animate({
                scrollTop: $(this).offset().top
            }, 200);
        }
    });
});
