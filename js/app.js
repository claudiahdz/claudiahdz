// Menu Revealing
$(window).bind('scroll', function() {

	var pos = $('.portfolio').position().top;

	 if ($(window).scrollTop() >  pos) {
	     $('header').addClass('fixed');
	 }
	 else {
	     $('header').removeClass('fixed');
	 }

});

// Smooth Scrolling
$('a.smooth').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 30
    }, 500);
    return false;
});