module.exports = function (stylecow) {
	
	//Adds support in explorer < 8

	stylecow.addTask({
		disable: {
			explorer: 8.0
		},
		Declaration: {
			display: function (declaration) {
				if (declaration.is({
					string: 'display: inline-block;'
				})) {
					declaration.after(stylecow.Declaration.createFromString('*zoom: 1'));
					declaration.after(stylecow.Declaration.createFromString('*display: inline'));
				}
			}
		}
	});
};
