/* globals define, App, Ember */

/**
 * Created by quinn on 10/4/13.
 */
define(['HipsterModel', 'AccessoryModel'], function () {
	App.HipsterAddController = Ember.ObjectController.extend({

		accessoryOptions: function () {
			return this.get('store').find('accessory');
		}.property(),

		actions: {
			buttonClick: function () {
				Ember.debug('Saving Hipster');
				this.get('model').save()
					.then(function (result) {
						this.transitionToRoute('hipster.view', result);
					}.bind(this));
			}
		}
	});
});