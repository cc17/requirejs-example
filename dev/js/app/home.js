requirejs(['jquery', 'common/lazyload.init', 'common/telinput.init'], function($) {
	console.log('Module home loaded.');


	(function($modal) {
		$('#btn-ok').on('click', function() {
			$modal.modal('hide');
		});

		$modal.on('hidden.bs.modal', function() {
			alert('Thanks!');
		});
	}($('#myModal')));

	(function($affix) {
		$affix.affix({
			offset: {
				top: 730
			}
		});
	}($('#affix')));
});