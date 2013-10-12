/**
 * Created by quinn on 10/12/13.
 */
/* globals App, Ember, define */

define([
	// Non - AMD
	'HipsterController',
	'HipsterModel'
], function (util) {
	"use strict";

	App.HipsterRoute = Ember.Route.extend({
		model: function (params) {
			switch (params.verb) {
				case "add":
					return this.store.createRecord('hipster');
			}
		}
	});
});