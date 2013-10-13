/**
 * Created by quinn on 10/4/13.
 */
/* globals define, App, DS */

define([], function () {
	"use strict";

	/**
	 *
	 * The Hipster Model
	 *
	 * @class Hipster
	 * @extends DS.Model
	 */
	App.Hipster = DS.Model.extend({
		/**
		 * The Hipster's first name
		 *
		 * @property firstName
		 * @type {String}
		 */
		firstName: DS.attr('string'),

		/**
		 * The Hipster's last name
		 *
		 * @property lastName
		 * @type {String}
		 */
		lastName: DS.attr('string'),

		/**
		 * The Hipster's accessories
		 */
        accessories: DS.belongsTo('accessory')
	});
});