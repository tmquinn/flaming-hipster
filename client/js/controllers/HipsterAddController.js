/**
 * Created by quinn on 10/4/13.
 */
define(['models/HipsterModel'], function () {
    App.HipsterAddController = Ember.ObjectController.extend({

        actions: {
            createNewRecord: function () {
                Em.debug('Saving Hipster');

                var foo = this.get('model');
                foo.save();
            }
        }

        /* Model Properties */

    });
});