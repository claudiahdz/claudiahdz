$(document).ready(function(){
	
	// Menu Revealing
	$(window).bind('scroll', function() {

		var pos = $('.portfolio').position().top;
		var intro = $('.intro').position().top;

		 if ($(window).scrollTop() >  pos) {
		     $('header').addClass('fixed');
		 }
		 else {
		     $('header').removeClass('fixed');
		 }

		 if ($(window).scrollTop() < intro) {
		 	$('.go-to-top').removeClass('fixed');
		 }
		 else {
		    $('.go-to-top').addClass('fixed');
		 }

	});

	// Smooth Scrolling
	$('a.smooth').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top - 30
	    }, 500);
	    return false;
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 220) {
			$('.go-to-top').fadeIn(500);
		} else {
			$('.go-to-top').fadeOut(500);
		}
	});

	$('.go-to-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 500);
		return false;
	});

	// Parallax
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

    $('.parallax-section').parallax({
		speed : 0.15
	});

});