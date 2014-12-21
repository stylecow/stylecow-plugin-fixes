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
			var block = declaration.parent({type: 'Block'});

			if (block) {
				stylecow.utils.addMsFilter(block, 'alpha(opacity=' + (parseFloat(declaration[0], 10) * 100) + ')');
			}
		}
	});
};
