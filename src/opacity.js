"use strict";

module.exports = function (tasks, stylecow) {
    
    //Adds support in explorer < 9
    tasks.addTask({
        forBrowsersLowerThan: {
            explorer: 9.0
        },
        filter: {
            type: 'Declaration',
            name: 'opacity'
        },
        fn: function (declaration) {
            let block = declaration.getParent('Block');

            if (block) {
                addMsFilter(block, 'alpha(opacity=' + (parseFloat(declaration[0], 10) * 100) + ')');
            }
        }
    });

    function addMsFilter (block, filter) {
        let declaration = block.getChild({
                type: 'Declaration',
                name: 'filter',
                vendor: 'ms'
            });

        if (!declaration) {
            return block.pushCode('-ms-filter: ' + filter, 'Declaration', 'createMsFilter');
        }

        if (declaration.is({string: '-ms-filter: none;'})) {
            return declaration
                .get({
                    type: 'Keyword',
                    name: 'none'
                })
                .replaceWith((new stylecow.String()).setName(filter));
        }

        let string = declaration.get('String');

        if (string.name) {
            string.name += ',' + filter;
        } else {
            string.name = filter;
        }
    }
};
