module.exports = function (stylecow) {
	
	//Fix the double margin bug in ie6 on float block elements

	stylecow.addTask({
		disable: {
			explorer: 7.0
		},
		Declaration: {
			float: function (declaration) {
				if (declaration.is({
					value: ['left', 'right']
				})) {
					declaration.after('_display: inline');
				}
			}
		}
	});
};
