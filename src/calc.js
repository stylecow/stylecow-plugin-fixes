module.exports = function (stylecow) {
	
	//Normalizes the calc function
	stylecow.addTask({
		filter: {
			type: 'Function',
			name: 'calc'
		},
		fn: function (fn) {
			var value = fn[0];
			var string = value.toString().replace(/([\w\%])\s*([\+\-])\s*/g, '$1 $2 ');

			value.replaceWith(stylecow.Value.createFromString(string));
		}
	});
};
