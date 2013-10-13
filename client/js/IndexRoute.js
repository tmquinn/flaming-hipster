/**
 * Created by quinn on 9/29/13.
 */
/* globals define, App, Ember */

define(['StartupModel'], function () {
	"use strict";

	App.IndexRoute = Ember.Route.extend({
		model: function () {
			return this.store.find('startup');
		}
	});
});