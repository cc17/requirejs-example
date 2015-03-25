define(['jquery', 'jquery.scrollto'], function($) {
	// console.log('jquery.scrollto 载入完成');
	$(function() {
		$('[data-toggle=scrollto]').each(function() {
			var $this = $(this),
				target = $this.attr('href') || $this.data('target') || 'body';

			$this.on('click', function() {
				$.scrollTo($(target), 1000);
			});
		});
	});
});