// create the back to top button
$(document).ready(function(){
   
    function goToTop() {
	   $('html').animate({
		scrollTop: 0}, 'slow');
    };

    function prependBackToTop(){
        $('body').prepend('<a onclick="goToTop()" href="#" class="back-to-top">Back to Top</a>');
    }
    
    prependBackToTop();
});

$(document).scroll(function() {
    var amountScrolled = 5;
    
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});
