module.exports = function (stylecow) {
	
	//Adds support in explorer < 9

	stylecow.addTask({
		disable: {
			explorer: 9.0
		},
		Declaration: {
			opacity: function (declaration) {
				var rule = declaration.ancestor({type: 'Rule'});

				if (rule) {
					rule.addOldMsFilter('alpha(opacity=' + (parseFloat(declaration.value, 10) * 100) + ')');
				}
			}
		}
	});
};
