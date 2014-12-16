module.exports = function (stylecow) {
	
	//Adds support in explorer < 9

	stylecow.addTask({
		disable: {
			explorer: 9.0
		},
		Declaration: {
			opacity: function (declaration) {
				var block = declaration.parent({type: 'Block'});

				if (block) {
					stylecow.utils.addMsFilter(block, 'alpha(opacity=' + (parseFloat(declaration[0], 10) * 100) + ')');
				}
			}
		}
	});
};
