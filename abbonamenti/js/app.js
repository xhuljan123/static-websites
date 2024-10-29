function closeMenu() {
	/* hide mega menu */
	$('#collapse-menu').collapse('hide');
}
$(document).ready(function() {
	/* owl carousel */
	$('.owl-carousel-featured').owlCarousel({
		items: 3,
		loop: true,
		mouseDrag: false,
		nav: true,
		dotsEach: false,
		slideBy: 3,
		navText: ['<img src=\'img/icons/left-arrow.png\'>', '<img src=\'img/icons/right-arrow.png\'>'],
		responsive: {
			0: {
				items: 1,
				nav: false,
				mouseDrag: true,
				slideBy: 1,
			},
			578: {
				items: 2,
				mouseDrag: true,
				slideBy: 2,
			},
			991: {
				items: 3
			}
		}
	});

	$('.owl-full').owlCarousel({
		items: 4,
		loop: true,
		mouseDrag: false,
		nav: true,
		dotsEach: false,
		slideBy: 4,
		navText: ['<img src=\'img/icons/left-arrow.png\'>', '<img src=\'img/icons/right-arrow.png\'>'],
		responsive: {
			0: {
				items: 1,
				nav: false,
				mouseDrag: true,
				slideBy: 1,
			},
			578: {
				items: 2,
				slideBy: 2,
				mouseDrag: true,
			},
			768: {
				items: 3,
				slideBy: 3,
			},
			991: {
				items: 4
			}
		}
	});
	$('.carousel-banner').owlCarousel({
		items: 1,
		mouseDrag: false,
		touchDrag: false,
		dotsEach: true,
		loop: true,
		nav: true,
		navText: ['<img src=\'img/icons/left-arrow-white.png\'>', '<img src=\'img/icons/right-arrow-white.png\'>'],
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		responsive: {
			0: {
				mouseDrag: true,
				touchDrag: true,
				nav: false,
			},
			578: {
				mouseDrag: true,
				touchDrag: true,
			}
		}
	});
	$('.owl-full-scheda').owlCarousel({
		items: 4,
		loop: true,
		mouseDrag: false,
		nav: true,
		dotsEach: false,
		slideBy: 4,
		navText: ['<img src=\'img/icons/left-arrow.png\'>', '<img src=\'img/icons/right-arrow.png\'>'],
		responsive: {
			0: {
				items: 1,
				nav: false,
				mouseDrag: true,
				slideBy: 1,
			},
			578: {
				items: 2,
				slideBy: 2,
				mouseDrag: true,
			},
			768: {
				items: 3,
				slideBy: 3,
			},
			991: {
				items: 4
			}
		}
	});
	$('.owl-gallery').owlCarousel({
		items: 1,
		mouseDrag: false,
		dotsEach: true,
		loop: true,
		responsive: {
			0: {
				mouseDrag: true,
			},
			578: {
				mouseDrag: false,
			}
		}
	});

	$('#collapse-text').on('show.bs.collapse', function () {
        $("[data-name]").text("Chiudi");
    });
    $('#collapse-text').on('hide.bs.collapse', function () {
        $("[data-name]").text("SCOPRI IL PIANO DELL'OPERA");
    });

    // open popup tips box
    $(".info-box").click(function(){
    	var elm = $(".pop-up");
		if(elm.css("display")=="block") {
    		elm.fadeOut();
    	}
    	else {
    		elm.fadeIn();
    	}
    });
    $(".close-popup").click(function(){
    	$(".pop-up").fadeOut();
    });
    $(".pop-up").on('click', function(e) { 
	    if(e.target == this){ 
	    	$(".pop-up").fadeOut();
	   }
	});


    $(".pop-offer").click(function(){
    	$("#pop-up-offer").fadeToggle(900);
    });


    // slide in/up billing address form
    $("#show-billing-address").click(function(){
    	var elm = $(".billing-address");
    	if(elm.css("display")=="block") {
    		elm.slideUp();
    	}
    	else {
    		elm.slideDown();
    	}
    });

	var width = $(window).width();
	var ismob = false;
	if(width<579) {
		ismob = true;
	}

	/* slidein mega menu */
	$('.mega-menu .dropdown').on('show.bs.dropdown', function(e){
		$(".open-dropdown").removeClass("show");
		$(".dropdown-effect").hide();
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});

	$('.mega-menu .dropdown').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});
	/* end slide submenu */

	/* menu */
	$('#collapse-menu').on('show.bs.collapse', function () {
		/* hide search */
		if(ismob==true) {
			$(".search-right").hide();
		}
		$(".search-mobile").removeClass("active");

		/* remove dropdown mini header */ 
		$(".open-dropdown").removeClass("show");
		$(".dropdown-effect").hide();
		//

		$(this).animate({
            left: "0px",
            right: "0px"
        },1000);
	});
	$('#collapse-menu').on('hidden.bs.collapse', function () {
		$('.mega-menu .burger-menu').addClass("collapsed");
		$('#collapse-menu').removeClass("show");
		$(this).animate({
            left: "-1000px",
            right: "1000px"
        },1000);
	});
	/* end menu */
	/* mini header dropdown */
	$(".open-dropdown").click(function(){
		/* hide search */
		if(ismob==true) {
			$(".search-right").hide();
		}
		$(".search-mobile").removeClass("active");

		/* hide mega menu */
		$('#collapse-menu').collapse('hide');

		$(".open-dropdown").removeClass("show");
		var element = $(this);
		var child = element.find(".dropdown-effect");
		if(child.css("display")=="block") {
			child.slideUp();
			element.removeClass("show");
		}
		else {
			$(".dropdown-effect").hide();
			child.slideDown();
			element.addClass("show");
		}
	});
	/* open search input on mobile */
	$(".search-mobile").click(function(){
		var search = $(".search-right");

		/* remove dropdown mini header */ 
		$(".open-dropdown").removeClass("show");
		$(".dropdown-effect").hide();
		//
		
		/* hide mega menu */
		$('#collapse-menu').collapse('hide');

		if(search.css("display")=="block") {
			$(".search-mobile").removeClass("active");
			search.slideUp();
		}
		else {
			$(".search-mobile").addClass("active");
			search.slideDown();
		}
		return false;
	});
	$(window).resize(function(){
		var widthNew = $(window).width();
		if(widthNew>578) {
			ismob = false;
			$(".search-right").show();
		}
		else {
			ismob = true;
			$(".search-right").hide();
			$(".search-mobile").removeClass("active");
		}
	});

	// show/hide element like amazon
	$(".show-element").click(function(){
		var target = $(this).data("target");
		var value = $(this).data("value");
		var actualVaule = $('[data-count]').data("count");
		var before = target - 1;
		var after = target + 1;
		var show = $('[data-show="'+target+'"]');
		var icon = $('[data-icon="'+target+'"]');
		var price = $("[data-show='0']");
		var total = $("[data-total]").data("total");

		if(show.css("display")=="none") {
			/* show item */
			switch(target) {
				case 1:
					if(total>0) {
						for(i=2; i<5; i++) {
							if ($('[data-show="'+i+'"]').css("display")=="block") {
								$('[data-icon="'+i+'"]').fadeIn(500);
							}
						}
					}
					break;
				case 2:
					if($('[data-show="1"]').css("display")=="block") {
						icon.fadeIn(500);
					}
					for(i=3; i<5; i++) {
						if ($('[data-show="'+i+'"]').css("display")=="block") {
							$('[data-icon="'+i+'"]').fadeIn(500);
						}
					}
					break;
				case 3:
					if($('[data-show="1"]').css("display")=="block" || $('[data-show="2"]').css("display")=="block") {
						icon.fadeIn(500);
					}
					if ($('[data-show="4"]').css("display")=="block") {
						$('[data-icon="4"]').fadeIn(500);
					}
					break;
				default:
					if($('[data-show="1"]').css("display")=="block" || $('[data-show="2"]').css("display")=="block" || $('[data-show="3"]').css("display")=="block") {
						icon.fadeIn(500);
					}
					break;
			}

			price.fadeIn(500);
			show.fadeIn(500);
			var acVal = parseFloat(actualVaule) + parseFloat(value);
			var t = $("[data-total]").data("total") + 1;
		}
		else {
			if(total==1) {
				price.fadeOut(500);
			}
			if(total>1) {
				switch (target) {
					case 1:
						for(i=2; i<5; i++) {
							if ($('[data-show="'+i+'"]').css("display")=="block") {
								$('[data-icon="'+i+'"]').fadeOut(500);
								break;
							}
						}
						break;
					case 2:
						if($('[data-show="1"]').css("display")=="none") {
							for(i=3; i<5; i++) {
								if ($('[data-show="'+i+'"]').css("display")=="block") {
									$('[data-icon="'+i+'"]').fadeOut(500);
									break;
								}
							}
						}						
						break;
					case 3:
						if($('[data-show="1"]').css("display")=="none" && $('[data-show="2"]').css("display")=="none") {
							$('[data-icon="4"]').fadeOut(500);
						}						
						break;
					default: 
						break;
				}
			}

			show.fadeOut(500);
			icon.fadeOut(500);
			var acVal = parseFloat(actualVaule) - parseFloat(value);
			var t = $("[data-total]").data("total") - 1;
		}
		acVal = acVal.toFixed(2);
		$('[data-count]').data("count",acVal);
		$('[data-count]').html(acVal);
		$("[data-total]").data("total",t);
	});


	/* scroll functions */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 800) {
			$('#scroll-top').fadeIn();
		} else {
			$('#scroll-top').fadeOut();
		}
	});
	$(".btn-scopri").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#scopri").offset().top - 20
	    }, 1000);
	});
	$(".scopri-offer").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#scopri-offer").offset().top - 20
	    }, 1000);
	});
	$("#scroll-top").click(function() {
	     $("html, body").animate({ scrollTop: 0 }, 1500);
	});
	$("#piano").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#piano-scroll").offset().top - 20
	    }, 1000);
	});


	$(".slide").click(function(){
		var atr = $(this).data('target');
		var elm = $("[data-show-box='"+atr+"']");
		if(elm.css("display")=="none") {
			elm.slideDown();
		}
		else {
			elm.slideUp();
		}

	});

});