"use strict";

module.exports = function (tasks) {
    
    //Fix the double margin bug in ie6 on float block elements
    tasks.addTask({
        forBrowsersLowerThan: {
            explorer: 7.0
        },
        filter: {
            type: 'Declaration',
            string: [
                'float: left;',
                'float: right;'
            ]
        },
        fn: function (declaration) {
            declaration.codeAfter('_display: inline', 'Declaration');
        }
    });
};
