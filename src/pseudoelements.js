"use strict";

module.exports = function (tasks, stylecow) {
    
    //Convert two-colon pseudoelements to one-colon pseudoclasses for explorer < 9
    tasks.addTask({
        forBrowsersLowerThan: {
            explorer: 9.0
        },
        filter: {
            type: 'PseudoElement',
            name: [
                'after',
                'before',
                'first-line',
                'first-letter'
            ]
        },
        fn: function (pseudoElement) {
            pseudoElement.replaceWith((new stylecow.PseudoClass).setName(pseudoElement.name));
        }
    });
};
