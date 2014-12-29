module.exports = function (stylecow) {
	
	//Normalizes the calc function
	stylecow.addTask({
		filter: {
			type: 'Function',
			name: 'calc'
		},
		fn: function (fn) {
			var value = fn.shift();
			var string = value.toString().replace(/([\w\%])\s*([\+\-])\s*/g, '$1 $2 ');

			fn.unshift(stylecow.Value.createFromString(string));
		}
	});
};
