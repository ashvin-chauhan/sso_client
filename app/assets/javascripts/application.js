// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require turbolinks
//= require jquery
//= require jquery_ujs
//= require owl.carousel
//= require tether.min
//= require bootstrap.min
//= require jquery.meanmenu
//= require jquery.selectric
//= require parallax.js
//= require wow.min
//= require jquery-scrolltofixed
//= require cascadingDivs.min
//= require jquery.matchHeight

$(document).on('turbolinks:load', function() {
	////////////////////
	/*$('#desktopnemu').meanmenu({
		meanScreenWidth     : "800",
		meanMenuContainer   : '#hand-over'
	});*/
	/*$('#developers-users ul li').matchHeight({
        target: $(this).find('.link-box')
    });*/
	function makeSameHeight(getele){
		var spDivH = 0;
		$(getele).each(function( index ) {
			console.log( index + ": " + $( this ).text() );
			var th = $( this ).height();
			if(th > spDivH){
				spDivH = th;
			}
		});
		return spDivH;
	}
	var getHH = makeSameHeight('#developers-users ul li');
	$('#developers-users ul li .link-box').css({'min-height':getHH});
	///
	//
	$('select').selectric();
	//
	$('#paragraphs').cascadingDivs();
	var sph = 0;
	$('.nav-content-holder > div').each(function( index ) {
		console.log( index + ": " + $( this ).text() );
		var th = $( this ).outerHeight();
		if(th > sph){
			sph = th;
		}
	});
	$('.nav-content-holder > div').css({'position':'absolute'});
	$('.nav-content-holder').css({'min-height':sph});
	$('#paragraphs > div').click(function() {
		var getid = $(this).attr('data-id');
		//alert(getid);
		$('.nav-content-holder > div').fadeOut('fast', function() {
    		$('.nav-content-holder > div#'+getid).fadeIn('fast');
			//alert(getid);
			var getHH_two = makeSameHeight('#'+getid+' ul li');
			//alert(getHH_two);
			//$('.nav-content-holder > div#'+getid).find('.link-box').css({'min-height':getHH_two});
  		});
	})
	/////
});
$(document).on('turbolinks:load', function() {
	var getdocH = $(document).height();
	var getwinH = $(window).height();
	var getwinW = $(window).width();
	//alert(getdocH+', '+getwinH);
	var getHeaderH = $('header').outerHeight();
	var getLinkH = $('.link-block').outerHeight();
	var getPaddingH = (getdocH-getLinkH);
	getPaddingH = (getPaddingH-getHeaderH)/2;
	if(getwinW > 768){
	$('.right-panel').css({'padding-top':getHeaderH+20, 'min-height':getdocH});
	$('.links-massage').css({'padding-top':getPaddingH});
	}
	///
});
