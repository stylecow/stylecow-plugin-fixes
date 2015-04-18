module.exports = function (stylecow) {
	
	//add ie9 fallback that support vm instead vmin
	stylecow.addTask({
		forBrowsersLowerThan: {
			explorer: 10.0
		},
		filter: {
			type: 'Declaration'
		},
		fn: function (declaration) {
			if (declaration.has({
				type: 'Unit',
				name: 'vmin'
			})) {
				declaration
					.cloneBefore()
					.getAll({
						type: 'Unit',
						name: 'vmin'
					}).forEach(function (unit) {
						unit.name = 'vm';
					});
			}
		}
	});
};
