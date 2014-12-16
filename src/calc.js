module.exports = function (stylecow) {
	
	//Normalizes the calc function

	stylecow.addTask({
		"Function": {
			calc: function (fn) {
				var fixed = fn[0].toString().replace(/([\w\%])\s*([\+\-])\s*/g, '$1 $2 ');

				fn.empty().push(stylecow.Value.createFromString(fixed));
			}
		}
	});
};
