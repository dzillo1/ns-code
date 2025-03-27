$(function() {
	if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
	    $('.nav-lower').height($(".nav-lower").height());
	    $('.nav-lower').affix({
	        offset: { 
			top: $('.nav-lower').offset().top 
		}
	    });
	    $('.alacarte .nav-lower').css({'background-color':'#026271'})
	}
});
