"use strict";

module.exports = function (tasks) {
    
    //Adds support in explorer < 8
    tasks.addTask({
        forBrowsersLowerThan: {
            explorer: 7.0
        },
        filter: {
            type: 'Declaration',
            name: 'min-height'
        },
        fn: function (declaration) {
            declaration
                .cloneBefore()
                .setName('_height');
        }
    });
};
