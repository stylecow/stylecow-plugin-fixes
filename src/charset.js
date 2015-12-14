"use strict";

module.exports = function (tasks) {
    
    //Fix multiple @charset
    tasks.addTask({
        fn: function (root) {
            let charsets = root.getAll({
                type: 'AtRule',
                name: 'charset'
            });

            if (charsets.length) {
                root.unshift(charsets.shift());
            }

            //remove remaining charsets
            charsets.forEach(charset => charset.detach());
        }
    });
};
