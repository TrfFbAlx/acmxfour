(function($) {

"use strict";
/*global Modernizr, jQuery */
/*jslint bitwise: true */

var LOLLUM = {};

/*-----------------------------------------------------------------------------------*/
/*	Logo Retina
/*-----------------------------------------------------------------------------------*/
LOLLUM.retina = function() {
	if ($("#retina-logo").length > 0) {
		var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1,
			desktopLogo = $('#desktop-logo'),
			retinaLogo = $('#retina-logo'),
			logoWidth = desktopLogo.width(),
			logoHeight = desktopLogo.height();
		if (pixelRatio > 1) {
			retinaLogo.attr({height: logoHeight, width: logoWidth});
			retinaLogo.css('display', 'inline-block');
			desktopLogo.hide();
		}
	}
};
/*-----------------------------------------------------------------------------------*/
/*	Navigation Menu
/*-----------------------------------------------------------------------------------*/
LOLLUM.submenu = function() {
	$('#nav-menu .sf-menu').superfish({
		autoArrows: false,
		delay: 500,
		speed: 200,
		speedOut: 200,
		useClick: false
	});
};
/*-----------------------------------------------------------------------------------*/
/*	Sticky Header
/*-----------------------------------------------------------------------------------*/
LOLLUM.sticky = function() {
	var header = $('#header-wrap'),
		headerHeight = 95,
		logo = $('#logo a img'),
		logo_ratio = logo.width()/logo.height(),
		els_h = $('#logo, .cart-yes, .cart-no'),
		els_lh = $('#site-title'),
		els_lhm = $('#nav-menu'),
		headerCart = $('#lol-mini-cart');

	$(window).scroll(resizeHeader);
	$(window).resize(function(){
		resizeHeader();
	});
	function resizeHeader() {
		if ($(window).width() > 991 || $(document.documentElement).hasClass('no-responsive')) {
			var st = $(window).scrollTop(), newH = 0;
			if(st < headerHeight/2) {
				newH = headerHeight - st;
				header.removeClass('lol-scroll-done');
			}
			else {
				newH = headerHeight/2;
				header.addClass('lol-scroll-done');
			}
			els_h.css({'height': newH + 'px'});
			els_lh.css({'lineHeight': newH + 'px'});
			els_lhm.css({'lineHeight': (newH-3) + 'px'});
			logo.css({'maxHeight': newH + 'px', 'maxWidth': newH*logo_ratio + 'px'});
		} else {
			els_h.css({'height' : 'auto'});
			els_lh.css({'lineHeight' : 'normal'});
			logo.css({'height' : '95px', 'max-height': '100%', 'max-width': 'none'});
		}
	}
};
/*-----------------------------------------------------------------------------------*/
/*	Search Menu
/*-----------------------------------------------------------------------------------*/
LOLLUM.searchHeader = function() {
	$("#top-header .icon-search-btn").toggle(
		function () {
			$("#top-header .header-search .searchbox").animate({marginRight: 0});
		},
		function () {
			$("#top-header .header-search .searchbox").animate({marginRight: "-165px"});
		}
	);
};
/*	Cart Header
/*-----------------------------------------------------------------------------------*/
LOLLUM.cartHeader = function() {
	function showCart() {
		$('.cart-items').show().animate({
			opacity: 1,
			marginTop: -1
		}, 200);
	}
	function hideCart() {
		$('.cart-items').animate({
			opacity: 0,
			marginTop: 30
		}, 250, function() {
			$(this).hide();
		});
	}
	$("#branding").hoverIntent( showCart, hideCart, "#lol-mini-cart" );
};
/*-----------------------------------------------------------------------------------*/
/*	Mobile Menu
/*-----------------------------------------------------------------------------------*/
LOLLUM.mobileMenu = function() {
	$('#mobile-primary-menu').customSelect({customClass:'mobile-select'});
	$('.mobile-nav-menu-inner').css('visibility', 'visible').animate({opacity: 1.0}, 200);
	$('#mobile-primary-menu').on('change', function() {
		window.location = $(this).val();
	});
};
/*-----------------------------------------------------------------------------------*/
/*	fitVids
/*-----------------------------------------------------------------------------------*/
LOLLUM.rVideos = function() {
	$(".entry-video, .video-widget, .entry-content").fitVids({
		customSelector: "iframe[src^='http://www.screenr.com']"
	});
};
/*-----------------------------------------------------------------------------------*/
/*	Flexslider
/*-----------------------------------------------------------------------------------*/
LOLLUM.flex = function() {
	$('.flex-gallery').flexslider({
		controlNav: false,
		slideshowSpeed: 4000,
		animation: "fade",
		animationSpeed: 600,
		start: function(slider) {
			slider.find('.preloader').hide();
		}
	});
	$('.flex-testimonial').flexslider({
		controlNav: false,
		directionNav: false,
		slideshowSpeed: 4000,
		animation: "fade",
		animationSpeed: 600,
		start: function(slider) {
			slider.find('.preloader').hide();
		}
	});
	$('.flex-product').flexslider({
		manualControls: ".thumbnails-nav img",
		slideshow: false,
		animation: "fade",
		animationSpeed: 600,
		start: function(slider) {
			slider.find('.preloader').hide();
		}
	});
};
/*-----------------------------------------------------------------------------------*/
/*	Toggles
/*-----------------------------------------------------------------------------------*/
LOLLUM.toggle = function() {
	var lolToggle = $('.lol-toggle'),
		toggleContents = $('.lol-toggle').children('.lol-toggle-content');
	toggleContents.not('[data-toggle="open"]').css('display', 'none');
	lolToggle.on('click', '.lol-toggle-header', function(){
		var toggleContent = $(this).next('.lol-toggle-content'),
			toggleIcon = $(this).find('.lol-icon-toggle'),
			iconOpen = '<i class="fa fa-chevron-down"></i>',
			iconClose = '<i class="fa fa-chevron-up"></i>';
		toggleContent.slideToggle();
		if (toggleIcon.hasClass('open')) {
			toggleIcon.removeClass('open');
			toggleIcon.html(iconOpen);
		} else {
			toggleIcon.addClass('open');
			toggleIcon.html(iconClose);
		}
	});
};
/*-----------------------------------------------------------------------------------*/
/*	FAQs
/*-----------------------------------------------------------------------------------*/
LOLLUM.faq = function() {
	var lolFaq = $('.lol-faq'),
		faqContents = $('.lol-faq').children('.lol-faq-content'),
		sortFaq = $('#sort-faqs');
	faqContents.css('display', 'none');
	lolFaq.on('click', '.lol-faq-header', function(){
		var faqContent = $(this).next('.lol-faq-content'),
			faqIcon = $(this).find('.lol-icon-faq'),
			iconOpen = 'Q',
			iconClose = 'A';
		faqContent.slideToggle();
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			faqIcon.html(iconOpen);
		} else {
			$(this).addClass('open');
			faqIcon.html(iconClose);
		}
	});
	sortFaq.change(function(){
		var selector = $(this).val();
		if (selector !== '*') {
			$('.lol-faq-wrap .lol-faq').not('[data-filter~="'+selector+'"]').slideUp('normal', function(){
				$('.lol-faq-wrap .lol-faq').filter('[data-filter~="'+selector+'"]').slideDown();
			});
		} else {
			$('.lol-faq-wrap .lol-faq').slideDown();
		}
	});
};
/*-----------------------------------------------------------------------------------*/
/*	Placeholder Support
/*-----------------------------------------------------------------------------------*/
LOLLUM.placeholder = function() {
	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() === input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
		}).blur(function() {
			var input = $(this);
			if (input.val() === '' || input.val() === input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() === input.attr('placeholder')) {
					input.val('');
				}
			});
		});
	}
};
/*-----------------------------------------------------------------------------------*/
/*	Filterable Portfolio
/*-----------------------------------------------------------------------------------*/
LOLLUM.isotope = function() {
	var itemsContainer = $('.section-filterable'),
		portfolioFilter = $('.portfolio-filter select');
	itemsContainer.isotope({
		itemSelector: '.portfolio-item',
		layoutMode: 'fitRows'
	});
	portfolioFilter.change(function(){
		var selector = $(this).val();
		itemsContainer.isotope({ filter: selector });
	});
};
/*-----------------------------------------------------------------------------------*/
/*	Custom Select
/*-----------------------------------------------------------------------------------*/
LOLLUM.customSelect = function() {
	$('select').not('#rating, #billing_country, #shipping_country, #shipping_method, .shipping_method, #mobile-primary-menu, .variations_form .variations select, #customer_details select, .edit-account select, .shipping_calculator select, .gform_wrapper select, .woocommerce-widget-layered-nav-dropdown').customSelect();
};
/*-----------------------------------------------------------------------------------*/
/* Back to Top
/*-----------------------------------------------------------------------------------*/
LOLLUM.backTop = function() {
	var windowWidth = $(window).width();
	if (windowWidth > 1023 || $(document.documentElement).hasClass('no-responsive')) {
		var didScroll = false;
		$(window).scroll(function () {
			didScroll = true;
		});
		setInterval(function () {
			if (didScroll) {
				didScroll = false;
				if ($(this).scrollTop() > 200) {
					$('#back-top').fadeIn();
				} else {
					$('#back-top').fadeOut();
				}
			}
		}, 250);
		$('#back-top').click(function() {
			$('body,html').animate({
				scrollTop: 0
			}, 300);
			return false;
		});
	}
};
/*-----------------------------------------------------------------------------------*/
/*	Timer
/*-----------------------------------------------------------------------------------*/
LOLLUM.timer = function() {
	var daysDiv = document.getElementById("days"),
		hoursDiv = document.getElementById("hours"),
		minutesDiv = document.getElementById("minutes"),
		secondsDiv = document.getElementById("seconds"),
		totalSeconds,
		days,
		hours,
		minutes,
		seconds;
	function pad(num, size) {
		var s = num + "";
		while (s.length < size) {
			s = "0" + s;
		}
		return s;
	}
	function updateTime(){
		days = Math.floor((totalSeconds) / 86400);
		hours = Math.floor((totalSeconds % 86400) / 3600);
		minutes = Math.floor(((totalSeconds % 86400) % 3600) / 60);
		seconds = Math.floor(((totalSeconds % 86400) % 3600) % 60);
	}
	function updateDisplay(){
		daysDiv.innerHTML = pad(days, 2);
		hoursDiv.innerHTML = pad(hours, 2);
		minutesDiv.innerHTML = pad(minutes, 2);
		secondsDiv.innerHTML = pad(seconds, 2);
	}
	function countdown(){
		updateTime();
		updateDisplay();
		if (totalSeconds === 0){
			$('#countdown-wrap').fadeOut('slow', function() {
			$('#count-end').fadeIn();

			});
		} else {
			totalSeconds -= 1;
			window.setTimeout(countdown, 1000);
		}
	}
	function initCountdown(tSeconds){
		totalSeconds = tSeconds;
		countdown();
	}
	$('#countdown').each(function() {
		var tSeconds = $(this).data('countdown');
		initCountdown(tSeconds);
	});
};
/*-----------------------------------------------------------------------------------*/
/*	Skills
/*-----------------------------------------------------------------------------------*/
LOLLUM.skillAnimations = function() {
	$('.lol-skill .lol-bar').appear(function() {
		var currentSkill = $(this);
		var w = currentSkill.data("skill");
		$(this).animate({width: w + "%"}, 600);
	});
};
/*-----------------------------------------------------------------------------------*/
/*	Image Animations
/*-----------------------------------------------------------------------------------*/
LOLLUM.animations = function() {
	$('.lol-item-heading, .lol-item-heading-small').appear(function() {
		$(this).children('h2').addClass('animated bounceInLeft done');
		$(this).children('p').addClass('animated bounceInRight done');
	});
	$('.post-thumb img, .project-thumb img, .entry-thumbnail img, .entry-content img[class*="wp-image-"], .gallery-icon img, .entry-product-thumb img, .product-thumb img, .product-thumb .onsale, #content .product-single-image .onsale, .product-category img, .product-single-image .attachment-shop_single, .flex-control-thumbs img, .member-thumbnail img, .lol-item-image img, .lol-item-brand img, .lol-item-image-text img').appear(function() {
		$(this).addClass('animated fadeIn');
	});
	$('.service-icon').parents('.row').appear(function() {
		$(this).find('.service-icon').each(function(i){
			var currentIcon = $(this);
			setTimeout(function(){
				currentIcon.addClass('animated bounceIn done');
			}, i * 200);
		});
	});
	$('.mini-service-icon').appear(function() {
		$(this).addClass('animated bounceIn done');
	});
	$('.lol-item-block-feature img').appear(function() {
		$(this).addClass('animated bounceIn done');
	});
	$('.lol-item-block-banner').appear(function() {
		$(this).find('img').addClass('animated bounceInLeft done');
		$(this).find('.block-banner-content').addClass('animated bounceInRight done');
	});
};
/*-----------------------------------------------------------------------------------*/
/*	Parallax
/*-----------------------------------------------------------------------------------*/
LOLLUM.bgParallax = function() {
	$('.parallax-yes').each(function() {
		$(this).parallax("49%", 0.3);
	});
	$(window).resize(function(){
		$('.parallax-yes').each(function() {
			$(this).parallax("49%", 0.3);
		});
	});
};
/*-----------------------------------------------------------------------------------*/
/*	prettyPhoto
/*-----------------------------------------------------------------------------------*/
LOLLUM.pretty = function() {
	if(jQuery().prettyPhoto) {
		$('.lol-item-image').find('a[data-rel^="prettyPhoto"]').prettyPhoto({
			deeplinking: false,
			social_tools: false,
			show_title: false
		});
	}
};
/*-----------------------------------------------------------------------------------*/
/*	Init Functions
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	LOLLUM.submenu();
	LOLLUM.searchHeader();
	LOLLUM.cartHeader();
	LOLLUM.customSelect();
	LOLLUM.mobileMenu();
	LOLLUM.rVideos();
	LOLLUM.flex();
	LOLLUM.toggle();
	LOLLUM.faq();
	LOLLUM.placeholder();
	LOLLUM.timer();
	LOLLUM.backTop();
	LOLLUM.pretty();
	LOLLUM.skillAnimations();
	if ((!Modernizr.touch) && ($(document.documentElement).hasClass('lol-sticky-header-yes'))) {
		LOLLUM.sticky();
	}
	if ($(document.documentElement).hasClass('lol-animations-yes')) {
		if (Modernizr.touch && $(document.documentElement).hasClass('lol-animations-touch-yes')) {
			LOLLUM.animations();
		} else if (!Modernizr.touch) {
			LOLLUM.animations();
		}
	}
});
$(window).load(function() {
	LOLLUM.retina();
	if (!$(document.documentElement).hasClass('lt-ie9')) {
		LOLLUM.isotope();
	}
	if (!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) {
		LOLLUM.bgParallax();
	}
});

$(document.body).on('adding_to_cart', function(ev, button) {
	if (button.hasClass('product_type_simple')) {
		button.parent().find(".product-mask").addClass("loading");
	}
});

$(document.body).on('added_to_cart', function() {
	$(".product-mask").removeClass("loading");
});

})(jQuery);
