/**
 * Created by quinn on 10/5/13.
 */
/* globals define, Ember, App */

define(['HipsterAddController', 'HipsterModel'], function () {
	"use strict";

	App.HipsterAddRoute = Ember.Route.extend({
		model: function () {
			Ember.debug('HipsterAddRoute.model');
			return this.get('store').createRecord('hipster');
		}
	});
});