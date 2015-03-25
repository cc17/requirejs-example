define(['jquery'], function($) {
	return function(ele, text) {
		$('body').append('<' + ele + '>' + text + '</' + ele + '>');
	};
});