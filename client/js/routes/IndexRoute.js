/**
 * Created by quinn on 9/29/13.
 */
define(['ember-data', 'models/Startup'], function () {
    App.IndexRoute = Ember.Route.extend({
        model: function () {
            return this.store.find('startup');
        }
    });
});