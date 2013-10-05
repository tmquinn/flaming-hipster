/**
 * Created by quinn on 10/5/13.
 */

define(['HipsterAddController'], function () {
    App.HipsterAddRoute = Em.Route.extend({
        model: function () {
            console.log('Creating Model');
            return this.get('store').createRecord('hipster');
        }
    });
});