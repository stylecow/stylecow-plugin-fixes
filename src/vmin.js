module.exports = function (stylecow) {
	
	//add ie9 fallback that support vm instead vmin

	stylecow.addTask({
		disable: {
			explorer: 10.0
		},
		Declaration: function (declaration) {
			if (declaration.getContent().join(', ').indexOf('vmin') !== -1) {
				var clone = declaration.cloneBefore();

				clone.search({
					type: 'Keyword',
					name: /([0-9\.]+)vmin/
				}).forEach(function (keyword) {
					keyword.name = keyword.name.slice(0, -2);
				});
				clone.vendor = 'ms';
			}
		}
	});
};
