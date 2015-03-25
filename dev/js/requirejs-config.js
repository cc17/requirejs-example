require.config({
	baseUrl: 'js',
	paths: {
		'jquery': 'lib/jquery-1.11.2.min',
		'jquery.lazyload': 'lib/jquery.lazyload',
		'bootstrap': 'lib/bootstrap/bootstrap.min',
		'jquery.telinput': 'lib/jquery.telinput/js/intltelinput',
		'jquery.scrollto': 'lib/jquery.scrollto'
	},

	shim: {
		'jquery.lazyload': {
			deps: ['jquery'],
			exports: '$.fn.lazyload'
		},
		'bootstrap': ['jquery'],
		'jquery.telinput': {
			deps: [
				'jquery',
				'css!lib/jquery.telinput/css/intltelinput.css'
			]
		},
		'jquery.scrollto': ['jquery'],
	}

});

require(['app/main']);