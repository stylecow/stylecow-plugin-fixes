module.exports = function (stylecow) {
	
	//Add the old syntax of rect()

	stylecow.addTask({
		disable: {
			explorer: 8.0
		},
		"Function": {
			rect: function (fn) {
				var declaration = fn.ancestor('Declaration', 'clip');

				if (declaration) {
					declaration.insertAfter('*clip: rect(' + fn.join(' ') + ')');
				}
			}
		}
	});
};
