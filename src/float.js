module.exports = function (stylecow) {
	
	//Fix the double margin bug in ie6 on float block elements
	stylecow.addTask({
		forBrowsersLowerThan: {
			explorer: 7.0
		},
		filter: {
			type: 'Declaration',
			string: [
				'float: left;',
				'float: right;'
			]
		},
		fn: function (declaration) {
			declaration.after(stylecow.Declaration.createFromString('_display: inline'));
		}
	});
};
