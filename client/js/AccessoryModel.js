/**
 * Created by quinn on 9/29/13.
 */
define([], function () {

    App.Accessory = DS.Model.extend({
        name: DS.attr('string')
    });

    App.Accessory.FIXTURES = [
        { id: 0, name: 'Fedora' },
        { id: 1, name: 'Glasses' },
        { id: 2, name: 'Beard' }
    ];
});