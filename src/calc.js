module.exports = function (stylecow) {
	
	//Normalizes the calc function

	stylecow.addTask({
		"Function": {
			calc: function (fn) {
				fn[0].replaceWith(fn[0].toString().replace(/([\w\%])\s*([\+\-])\s*/g, '$1 $2 '));
			}
		}
	});
};
