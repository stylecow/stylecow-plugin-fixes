module.exports = function (stylecow) {
	require('./src/clip')(stylecow);
	require('./src/column-break')(stylecow);
	require('./src/float')(stylecow);
	require('./src/initial')(stylecow);
	require('./src/inline-block')(stylecow);
	require('./src/min-height')(stylecow);
	require('./src/opacity')(stylecow);
	require('./src/pseudoelements')(stylecow);
	require('./src/resolution')(stylecow);
	require('./src/vmin')(stylecow);
};
