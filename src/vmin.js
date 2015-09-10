"use strict";

module.exports = function (tasks) {
    
    //add ie9 fallback that support vm instead vmin
    tasks.addTask({
        forBrowsersLowerThan: {
            explorer: 10.0
        },
        filter: 'Declaration',
        fn: function (declaration) {
            if (declaration.has({
                type: 'Unit',
                name: 'vmin'
            })) {
                declaration
                    .cloneBefore()
                    .getAll({
                        type: 'Unit',
                        name: 'vmin'
                    })
                    .forEach(unit => unit.name = 'vm');
            }
        }
    });
};
