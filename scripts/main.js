// create the back to top button

function goToTop() {
    $('html, body').animate({
    scrollTop: 0}, 'slow');
};

$(document).ready(function(){

    function prependBackToTop(){
        $('body').prepend('<a onclick="goToTop()" href="#" class="back-to-top">Back to Top</a>');
    }
    prependBackToTop();
});

$(document).scroll(function() {
    var amountScrolled = 500;
    
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});
