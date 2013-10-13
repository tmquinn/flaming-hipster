/* globals define, App, Ember */

/**
 * Created by quinn on 10/4/13.
 */
define(['HipsterModel', 'AccessoryModel'], function () {
	"use strict";

	/**
	 * Hipster / Add Controller
	 *
	 * @class HipsterAddController
	 * @extends Ember.ObjectController
	 */
	App.HipsterAddController = Ember.ObjectController.extend({

		foo: function (key, value) {
			console.log(key, value);
			this.set('model.accessories', value);
		}.property(),

		/**
		 * Returns all Accessory Model records
		 *
		 * @method accessoryOptions
		 * @return DS.PromiseArray
		 */
		accessoryOptions: function () {
			return this.get('store').find('accessory');
		}.property(),

		actions: {
			/**
			 * Saves the new record when the user presses
			 * the button
			 *
			 * @method buttonClick
			 */
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