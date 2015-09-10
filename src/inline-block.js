"use strict";

module.exports = function (tasks) {
    
    //Adds support in explorer < 8
    tasks.addTask({
        forBrowsersLowerThan: {
            explorer: 8.0
        },
        filter: {
            type: 'Declaration',
            string: 'display: inline-block;'
        },
        fn: function (declaration) {
            declaration.codeAfter('*zoom: 1', 'Declaration');
            declaration.codeAfter('*display: inline', 'Declaration');
        }
    });
};
