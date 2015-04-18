module.exports = function (stylecow) {
	
	//Adds support in explorer < 8
	stylecow.addTask({
		forBrowsersLowerThan: {
			explorer: 8.0
		},
		filter: {
			type: 'Declaration',
			string: 'display: inline-block;'
		},
		fn: function (declaration) {
			declaration.after(stylecow.parse('*zoom: 1', 'Declaration'));
			declaration.after(stylecow.parse('*display: inline', 'Declaration'));
		}
	});
};
