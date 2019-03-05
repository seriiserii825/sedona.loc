$(function () {
  /*
      https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
      ===========================*/
  $("html").easeScroll({
    frameRate: 60,
    animationTime: 1000,
    stepSize: 90,
    pulseAlgorithm: 1,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: true,
    arrowScroll: 50,
    touchpadSupport: true,
    fixedBackground: true
  });

	//show menu
	let closeMenu = $('#js-close-menu');
	let showMenu = $('#js-show-menu');
	let navList = $('#js-nav-list');


	// closeMenu.show();

	showMenu.on('click', function(){
		if(navList.hasClass('close')){
			navList.slideDown();
			closeMenu.show();
		}else{
			navList.addClass('close').slideUp();
			closeMenu.hide();
		}
	});

	closeMenu.on('click', function(){
		navList.slideUp();
		closeMenu.hide();
	});

	if($('#js-photo-slider').length > 0){
		//photo-slider
		$('#js-photo-slider').slick({
			arrows: false,
			asNavFor: '#js-photo-slider-small'
		});
	}

	if($('#js-photo-slider-small').length > 0){
		//photo-slider-small
		$('#js-photo-slider-small').slick({
			arrows: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '#js-photo-slider',
			focusOnSelect: true,
			responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 448,
						settings: "unslick"
					}
				]
		});
	}


});

