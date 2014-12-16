module.exports = function (stylecow) {
	
	//Add the old syntax of rect()

	stylecow.addTask({
		disable: {
			explorer: 8.0
		},
		"Function": {
			rect: function (fn) {
				var declaration = fn.parent({type: 'Declaration', name: 'clip'});

				if (declaration) {
					declaration.after(stylecow.Declaration.createFromString('*clip: rect(' + fn.join(' ') + ')'));
				}
			}
		}
	});
};
