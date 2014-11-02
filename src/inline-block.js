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
					declaration.after(new stylecow.Declaration('*zoom')).setContent('1');
					declaration.after(new stylecow.Declaration('*display')).setContent('inline');
				}
			}
		}
	});
};
