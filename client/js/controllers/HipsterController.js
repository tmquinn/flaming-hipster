/**
 * Created by quinn on 10/4/13.
 */
define(['models/HipsterModel'], function () {
    App.HipsterController = Ember.Controller.extend({
        init: function () {
            console.log('Initing HipsterController');
            this._super();
        },

        actions: {
            createNewRecord: function () {
                Em.debug('Saving Hipster');
                var foo = this.get('store').createRecord('hipster', {
                    firstName: this.get('firstName'),
                    lastName: this.get('lastName')
                });
                foo.save();
                foo.unload();
            }
        }

        /* Model Properties */

    });
});