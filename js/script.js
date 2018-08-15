$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#top').fadeIn();
    } else {
        $('#top').fadeOut();
    }
});

$(window).load(function(){
	$('#onload').modal('show');
});

$(function(){
	$("#top").click(function () {
		$("html, body").animate({scrollTop: 0}, 500);
	});

	$('#camera_wrap_1').camera({
		height: '35%',
		fx:'simpleFade',
		pagination: false,
		opacityOnGrid: false,
		navigation: true,
		time: 3000,
		transPeriod: 500,
		imagePath: 'plugins/camera/images/'
	});

	$('#camera_wrap_2').camera({
		height: '20%',
		fx:'simpleFade',
		pagination: false,
		opacityOnGrid: false,
		navigation: true,
		time: 3000,
		transPeriod: 1500,
		imagePath: 'plugins/camera/images/'
	});
	
	$('.testi-content').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});

	$("body, #menu-responsive").niceScroll({cursorwidth: '5px', autohidemode: true, zindex: 999, scrollspeed: "50", mousescrollstep: "50", horizrailenabled: false }).css({'position':'absolute','right':'5px'});
	
	
});