define(['jquery', 'jquery.telinput', 'css!lib/jquery.telinput/css/intltelinput.css'], function($) {
	console.log('Module telinput.init loaded.');
	$(function() {
		$('input[data-toggle=telinput]').intlTelInput();
	});
});