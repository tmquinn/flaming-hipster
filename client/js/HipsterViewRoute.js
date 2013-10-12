/**
 * Created by quinn on 10/12/13.
 */

define(['HipsterViewController'], function () {
	App.HipsterViewRoute = Ember.Route.extend({
		actions: {
			buttonClick: function () {
				this.transitionTo('hipster.edit');
			}
		}
	});
});