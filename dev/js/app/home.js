requirejs(['jquery', 'common/lazyload.init', 'common/telinput.init'], function($) {
	console.log('Module home loaded.');

	var $modal = $('#myModal');

	$('#btn-ok').on('click', function() {
		$modal.modal('hide');
	});

	$modal.on('hidden.bs.modal', function() {
		alert('Thanks!');
	});
});