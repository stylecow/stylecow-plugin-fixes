module.exports = function (stylecow) {
	
	//Convert two-colon pseudoelements to one-colon for explorer < 9
	stylecow.addTask({
		forBrowsersLowerThan: {
			explorer: 9.0
		},
		filter: {
			type: 'Keyword',
			name: [
				'::after',
				'::before',
				'::first-line',
				'::first-letter'
			]
		},
		fn: function (keyword) {
			keyword.name = keyword.name.substr(1);
		}
	});
};
