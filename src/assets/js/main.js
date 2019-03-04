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


	closeMenu.show();

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
});

