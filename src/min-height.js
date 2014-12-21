module.exports = function (stylecow) {
	
	//Adds support in explorer < 8
	stylecow.addTask({
		forBrowsersLowerThan: {
			explorer: 7.0
		},
		filter: {
			type: 'Declaration',
			name: 'min-height'
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '_height';
		}
	});
};
