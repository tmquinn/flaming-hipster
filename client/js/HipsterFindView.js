/**
 * Created by quinn on 10/5/13.
 */
/* globals define, Ember, App */

define([], function () {
	"use strict";

	/**
	 * Hipster / Find View
	 *
	 * @class HipsterFindView
	 * @extends Ember.View
	 */
	App.HipsterFindView = Ember.View.extend({
		/**
		 * Called once view is inserted into DOM
		 *
		 * @method didInsertElement
		 */
		didInsertElement: function () {
			this.$('#first-name').focus();
		}
	});
});