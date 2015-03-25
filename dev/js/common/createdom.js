define(['jquery'], function($) {
	return function(text) {
		$('body').append('<h1>' + text + '</h1>');
	};
});