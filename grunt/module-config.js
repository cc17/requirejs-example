var deps = [
		'app/main'
	],

	modules = [
		'app/main',
		'app/home',
	],

	arrEodules = [];

for (var i = 0; i < modules.length; i++) {

	if (i == 0) {
		arrEodules[i] = {
			name: modules[i]
		};
	} else {
		arrEodules[i] = {
			name: modules[i],
			exclude: deps
		};
	}
};

module.exports = arrEodules;