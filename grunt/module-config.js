var deps = [
		'jquery',
		'jquery.lazyload',
		'bootstrap',
		'jquery.telinput',
		'jquery.scrollto',
	],

	modules = [
		'app/main',
		'app/home',
	],

	arrEodules = [];

for (var i = 0; i < modules.length; i++) {

	arrEodules[i] = {
		name: modules[i],
		exclude: deps
	};
};


module.exports = arrEodules;