module.exports = function (stylecow) {
	
	//Fix the double margin bug in ie6 on float block elements

	stylecow.addTask({
		disable: {
			explorer: 7.0
		},
		Declaration: {
			float: function (declaration) {
				if (declaration.is({
					string: [
						'float: left;',
						'float: right;'
					]
				})) {
					declaration.after(stylecow.Declaration.createFromString('_display: inline'));
				}
			}
		}
	});
};
