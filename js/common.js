// Scroll move
function scrollMove(t,h) {
	"use strict";
	if(h==undefined) h=0;
	var o = jQuery('html, body');
	o.animate({
		scrollTop:jQuery(t).offset().top-h
	},500);
}

// Menu Open
function menuOpen(o){
	"use strict";
	var o = $(o).attr('id'),
		a = -$(window).scrollTop();
	$('#wrap').css('top',a)
	$('#'+o).after('<a class="dim" onclick="menuClose('+o+');"><i class="sr-only">close</i></a>');
	$('body').addClass('nav-open');
	setTimeout(function  () {
		$('#'+o).show(0,function(){
			$('body').addClass(o+'-open');
		});
	},50);
}

// Menu Close
function menuClose(o){
	'use strict';
	var o = $(o).attr('id'),
		originScroll = -$('#wrap').position().top;
	$('body').removeClass(o+'-open');
	setTimeout(function(){
		$('#'+o).hide();
		$('body').removeClass('nav-open').find('.dim').remove();
		$(window).scrollTop(originScroll);
		$('#wrap').removeAttr('style');
	},50);
}

jQuery(function ($) {
	"use strict";

	$('.depth>a').click(function  () {
		$(this).toggleClass('on').next().stop().slideToggle(400);
		return false;
	});
	//collapse
	$('.btn-collapse').on('click',function  () {
		$(this).parent('.collapse-title').toggleClass('open').next('.collapse-cnt').toggle();
	});

	//tab
	$('.tab-hover a').hover(function(){
		$(this).click();
	});
})

