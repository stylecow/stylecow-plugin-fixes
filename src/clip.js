"use strict";

module.exports = function (tasks) {
    
    //Add the old syntax of rect()
    tasks.addTask({
        forBrowsersLowerThan: {
            explorer: 8.0
        },
        filter: {
            type: 'Declaration',
            name: 'clip'
        },
        fn: function (declaration) {
            if (
                declaration.has({
                    type: 'Function',
                    name: 'rect'
                })
            ) {
                declaration
                    .cloneAfter()
                    .setName('*clip')
                    .getAll({
                        type: 'Function',
                        name: 'rect'
                    })
                    .forEach(fn => fn.replaceWithCode('rect(' + fn.join(' ') + ')', 'Function'));
            }
        }
    });
};
