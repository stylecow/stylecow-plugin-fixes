module.exports = function (stylecow) {
	
	//Adds support in explorer < 9
	stylecow.addTask({
		forBrowsersLowerThan: {
			explorer: 9.0
		},
		filter: {
			type: 'Declaration',
			name: 'opacity'
		},
		fn: function (declaration) {
			var block = declaration.getParent('Block');

			if (block) {
				addMsFilter(block, 'alpha(opacity=' + (parseFloat(declaration[0], 10) * 100) + ')');
			}
		}
	});

	function addMsFilter (block, filter) {
		var declaration = block.getChild({
				type: 'Declaration',
				name: 'filter',
				vendor: 'ms'
			});

		if (!declaration) {
			return block.push(stylecow.parse('-ms-filter: ' + filter, 'Declaration', 'createMsFilter'));
		}

		if (declaration.is({string: '-ms-filter: none;'})) {
			return declaration
				.get({
					type: 'Keyword',
					name: 'none'
				})
				.replaceWith((new stylecow.String()).setName(filter));
		}

		var string = declaration.get('String');

		if (string.name) {
			string.name += ',' + filter;
		} else {
			string.name = filter;
		}
	}
};
