module.exports = function (stylecow) {
	
	//Adds support of break-before, break-after, break-inside in webkit using the non-standard -webkit-column-break-
	stylecow.addTask({
		disable: {
			chrome: 21.0,
			safari: 6.1,
			android: 4.4,
			ios: 7.0
		},
		Declaration: function (declaration) {
			if (declaration.is({
				string: [
					'break-before: column;',
					'break-after: column;',
					'break-inside: column;'
				]
			})) {
				declaration.before(stylecow.Declaration.createFromString('-webkit-column-' + declaration.name + ':always'));
			}
		}
	});
};
