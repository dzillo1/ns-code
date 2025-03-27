$(function() {
    //show tooltip when pick menu is clicked
    if ($('#custom').is(':checked')) { 
        $('input#custom').parent('label').after('<div class="popover top show" id="pick-popover" style="margin-right: 15px; z-index:900;"><div class="arrow"></div><div class="popover-content"><p>Ready to pick your menu? You&rsquo;re almost there. <span class="hidden-xs hidden-sm">Click</span><span class="hidden-md hidden-lg">Tap</span> order now, fill in your profile info, then start picking your menu!</p></div></div>');
        var tooltipHeight = $("#pick-popover").height() + 8; 
        $("#pick-popover").css('top', '-'+tooltipHeight+'px').delay(4000).queue(function(next) {
            $("#pick-popover").remove();
            next();
        }); 
        $("#pick-popover").click(function(){ 
            $(this).remove(); 
        }); 
    }
});
