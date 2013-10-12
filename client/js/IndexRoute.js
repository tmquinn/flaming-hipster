/**
 * Created by quinn on 9/29/13.
 */
define(['StartupModel'], function () {
	App.IndexRoute = Ember.Route.extend({
		model: function () {
			return this.store.find('startup');
		}
	});
});