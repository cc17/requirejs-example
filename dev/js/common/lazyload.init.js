define(['jquery', 'jquery.lazyload'], function($) {
	$(function() {
		$('img[data-original]').lazyload({
			effect: 'fadeIn'
		});
	});
});