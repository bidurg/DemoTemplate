$(document).ready(function(){

	/***** Slider Height Same As Screen Height  ***/
	var sliderHeight = $(window).height();
		$('#myCarousel .carousel-inner .item').css('height',sliderHeight);

		$(window).resize(function(){'use strict',
			$('#myCarousel .carousel-inner .item').css('height',sliderHeight);
		});

	/****** SMOOTH SCROLLING *******/
	$('.navbar-collapse ul li a, .page-scroll').click(function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 2000);
		return false;
	});

	/*** SCROLL TO TOP ***/
	$(window).scroll(function(){
		var scrollbar = $(window).scrollTop();
		if(scrollbar > 500){
			$('.to-top').fadeIn(300);
		}
		else{
			$('.to-top').fadeOut(300);
		}
	});
	$('.to-top').click(function(){
		$('body,html').animate({scrollTop : 0}, 1000);
		return false;
	});

	/**** MOBILE MENU CLICK EVENT *****/
	$('#myNavbar a').click(function(){
		$('#myNavbar').removeClass('in');
	});
});