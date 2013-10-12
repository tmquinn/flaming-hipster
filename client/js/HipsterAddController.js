/* globals define, App, Ember */

/**
 * Created by quinn on 10/4/13.
 */
define(['HipsterModel', 'AccessoryModel'], function () {
    App.HipsterAddController = Ember.ObjectController.extend({

        accessoryOptions: function () {
            return this.get('store').find('accessory');
        }.property(),

        actions: {
            createNewRecord: function () {
                Ember.debug('Saving Hipster');

                var foo = this.get('model');
                foo.save().then(function () {
                    this.set('model', this.get('store').createRecord('hipster'));
                });
            }
        }
    });
});