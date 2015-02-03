$(document).ready(function(){
	
	// Responsive 
	var mobile = window.matchMedia('(max-width: 650px)');
	var medium = window.matchMedia('(max-width: 1120px)');

	if (mobile.matches){	

		var layer1 = 'img/layers/layer1-mobile.jpg';
		var layer3 = 'img/layers/layer3-mobile.png';
		$('.layer:first-child img').attr("src", layer1);
		$('.layer:nth-child(4) img').attr("src", layer3);

		$('.aboutme .pictures').removeClass('three').addClass('twelve');
		
		$('.aboutme .nine.columns.info').removeClass('nine').addClass('twelve');

	}

	$(window).resize(function(){

		if (mobile.matches){	

			var layer1 = 'img/layers/layer1-mobile.jpg';
			var layer3 = 'img/layers/layer3-mobile.png';
			$('.layer:first-child img').attr("src", layer1);
			$('.layer:nth-child(4) img').attr("src", layer3);

			$('.aboutme .pictures').removeClass('three').addClass('twelve');

			$('.aboutme .nine.columns.info').removeClass('nine').addClass('twelve');

		} else {

			var layer1 = 'img/layers/layer1.jpg';
			var layer3 = 'img/layers/layer3.png';
			$('.layer:first-child img').attr("src", layer1);
			$('.layer:nth-child(4) img').attr("src", layer3);

			$('.aboutme .pictures').removeClass('twelve').addClass('three');

			$('.aboutme .twelve.columns.info').removeClass('twelve').addClass('nine');

		}	

	});

	if (medium.matches) {

		$('.skills.columns').removeClass('six').addClass('twelve');
	
	} 

	$(window).resize(function(){

		if (medium.matches) {

			$('.skills.columns').removeClass('six').addClass('twelve');
		
		} else {
			
			$('.skills.columns').removeClass('twelve').addClass('six');

		}

	});

});