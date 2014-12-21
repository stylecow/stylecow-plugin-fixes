module.exports = function (stylecow) {
	
	//Adds support of break-before, break-after, break-inside in webkit using the non-standard -webkit-column-break-
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: 21.0,
			safari: 6.1,
			android: 4.4,
			ios: 7.0
		},
		filter: {
			type: 'Declaration',
			string: [
				'break-before: column;',
				'break-after: column;',
				'break-inside: column;'
			]
		},
		fn: function (declaration) {
			declaration.before(stylecow.Declaration.createFromString('-webkit-column-' + declaration.name + ':always'));
		}
	});
};
