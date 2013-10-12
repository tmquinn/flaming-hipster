/* global define, App, Ember */

/**
 * Created by quinn on 10/11/13.
 */

define([
	// AMD
	'util'
], function (util) {
	"use strict";

	App.HipsterController = Ember.ObjectController.extend({

		verbTitle: function () {
			return this.get('model.isNew') ? 'Add' : 'Edit';
		}.property('model.isNew'),

		verbAction: function () {
			return this.get('model.isNew') ? 'Create' : 'Update';
		}.property('model.isNew'),

		actions: {
			processRecord: function () {
				this.get('model').save();
			}
		}
	});
});