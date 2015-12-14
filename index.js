module.exports = function (tasks) {
    tasks.use(require('./src/import'));
    tasks.use(require('./src/clip'));
    tasks.use(require('./src/column-break'));
    tasks.use(require('./src/charset'));
    tasks.use(require('./src/float'));
    tasks.use(require('./src/initial'));
    tasks.use(require('./src/inline-block'));
    tasks.use(require('./src/min-height'));
    tasks.use(require('./src/opacity'));
    tasks.use(require('./src/pseudoelements'));
    tasks.use(require('./src/resolution'));
    tasks.use(require('./src/vmin'));
};
