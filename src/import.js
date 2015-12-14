"use strict";

module.exports = function (tasks) {
    
    //Fix @import that must precede all other types of rules except @charset.
    tasks.addTask({
        fn: function (root) {
            let imports = root.getAll({
                type: 'AtRule',
                name: 'import'
            });

            while (imports.length) {
                root.unshift(imports.pop());
            }
        }
    });
};
