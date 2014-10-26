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
				name: ['break-before', 'break-after', 'break-inside'],
				value: 'column'
			})) {
				declaration.insertBefore('-webkit-column-' + declaration.name + ':always');
			}
		}
	});
};
