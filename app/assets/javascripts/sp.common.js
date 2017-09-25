$(document).ready(function(){
	////////////////////
	//openPostProperty
	$('#openPostProperty').click(function(event) {
		event.preventDefault();
		$('#PostProperty').fadeIn('fast');
		$('#body-content').fadeOut('fast');
		initMap();
	});
	$('#close-pop').click(function(event) {
		event.preventDefault();
		$('#PostProperty').fadeOut('fast');
		$('#body-content').fadeIn('fast');
	});
	/////////////////////
});
(function ($) {
	"use strict";
	$.fn.spmakeheight = function (options) {
		//alert(1);
		var getele = $(this);
		var getW = getele.find('li').width();
		//alert(getW);
		getele.find('li').css({'height':getW});
	};
})(jQuery);