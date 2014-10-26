module.exports = function (stylecow) {
	
	//Adds support in explorer < 8

	stylecow.addTask({
		disable: {
			explorer: 8.0
		},
		Declaration: {
			display: function (declaration) {
				if (declaration.is({
					value: 'inline-block'
				})) {
					declaration.insertAfter('*zoom: 1').insertAfter('*display: inline');
				}
			}
		}
	});
};
