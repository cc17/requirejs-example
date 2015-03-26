define(['jquery', 'jquery.telinput'], function($) {
	console.log('Module telinput.init loaded.');
	$(function() {
		$('input[data-toggle=telinput]').intlTelInput();
	});
});