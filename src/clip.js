module.exports = function (stylecow) {
	
	//Add the old syntax of rect()
	stylecow.addTask({
		forBrowsersLowerThan: {
			explorer: 8.0
		},
		filter: {
			type: 'Declaration',
			name: 'clip'
		},
		fn: function (declaration) {
			if (
				declaration.has({
					type: 'Function',
					name: 'rect'
				})
			) {
				declaration
					.cloneAfter()
					.setName('*clip')
					.getAll({
						type: 'Function',
						name: 'rect'
					})
					.forEach(function (fn) {
						fn.replaceWith(stylecow.parse('rect(' + fn.join(' ') + ')', 'Function'));
					});
			}
		}
	});
};
