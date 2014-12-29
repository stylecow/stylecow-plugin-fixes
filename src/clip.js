module.exports = function (stylecow) {
	
	//Add the old syntax of rect()
	stylecow.addTask({
		forBrowsersLowerThan: {
			explorer: 8.0
		},
		filter: {
			type: 'Function',
			name: 'rect'
		},
		fn: function (fn) {
			var declaration = fn.parent({
				type: 'Declaration',
				name: 'clip'
			});

			if (declaration) {
				declaration.after(stylecow.Declaration.createFromString('*clip: rect(' + fn.join(' ') + ')'));
			}
		}
	});
};
