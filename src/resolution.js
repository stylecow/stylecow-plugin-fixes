"use strict";

module.exports = function (tasks) {

    //Add -webkit-device-pixel-ratio
    tasks.addTask({
        forBrowsersLowerThan: {
            chrome: 29,
            safari: false,
            ios: false,
            android: 4.4,
        },
        filter: {
            type: 'ConditionalFeature',
            vendor: false,
            name: ['resolution', 'min-resolution', 'max-resolution']
        },
        fn: function (conditionalFeature) {
            var query = conditionalFeature.getAncestor('MediaQuery');

            if (query) {
                query.
                    cloneBefore()
                    .getAll({
                        type: 'ConditionalFeature',
                        vendor: false,
                        name: ['resolution', 'min-resolution', 'max-resolution']
                    })
                    .forEach(function (feature) {
                        //change name
                        switch (feature.name) {
                            case 'resolution':
                                feature.setNameWithVendor('-webkit-device-pixel-ratio');
                                break;

                            case 'min-resolution':
                                feature.setNameWithVendor('-webkit-min-device-pixel-ratio');
                                break;

                            case 'max-resolution':
                                feature.setNameWithVendor('-webkit-max-device-pixel-ratio');
                                break;
                        }

                        //change unit
                        var unit = feature.get('Unit');

                        if (unit) {
                            let number = unit.get('Number');

                            if (unit.name === 'dpi') {
                                number.name = Math.round((number.name / 96) * 100) / 100;
                            } else if (unit.name === 'dpcm') {
                                number.name = Math.round((number.name / 2.54) * 100) / 100;
                            }

                            unit.replaceWith(number);
                        }
                    });
            }
        }
    });

    //Converts ddpx and dpcm to a more compatible dpi
    tasks.addTask({
        filter: {
            type: 'Unit',
            name: ['ddpx', 'dpcm']
        },
        fn: function (unit) {
            var number = unit.get('Number');

            if (unit.name === 'dppx') {
                number.name = number.name * 96;
            } else if (unit.name === 'dpcm') {
                number.name = number.name * 2.54;
            }

            unit.name = 'dpi';
        }
    });
};
