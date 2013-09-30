/**
 * Created by quinn on 9/29/13.
 */
define(['ember-data'], function () {

    App.Accessories = DS.Model.extend({
        name: DS.attr('string')
    });

    App.AccessoriesAdapter = DS.RESTAdapter.extend();

    App.Accessories.FIXTURES = [
        { id: 0, name: 'Fedora' },
        { id: 1, name: 'Glasses' },
        { id: 2, name: 'Beard' }
    ];
});