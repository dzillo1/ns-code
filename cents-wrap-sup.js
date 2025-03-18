$(function() {
    $(".plan .amount").each(function() {
        var b = $(this),
            c = b.text(),
            d = c.split(".");

        b.text(d[0]);

        if (d.length > 1) {
            b.append("<sup></sup>");
            $('sup', b).text("." + d[1]);
        }
    });
});
