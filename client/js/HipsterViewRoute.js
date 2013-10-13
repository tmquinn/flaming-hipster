/**
 * Created by quinn on 10/12/13.
 */
/* globals define, App, Ember */

define(['HipsterViewController'], function () {
	"use strict";
	
	App.HipsterViewRoute = Ember.Route.extend({
		actions: {
			buttonClick: function () {
				this.transitionTo('hipster.edit');
			}
		}
	});
});