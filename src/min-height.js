module.exports = function (stylecow) {
	
	//Adds support in explorer < 8

	stylecow.addTask({
		disable: {
			explorer: 7.0
		},
		Declaration: {
			'min-height': function (declaration) {
				declaration.before('_height:' + declaration.value);
			}
		}
	});
};
