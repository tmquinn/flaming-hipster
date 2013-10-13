/**
 * Created by quinn on 10/4/13.
 */
/* globals define, App, DS */

define([], function () {
	"use strict";

	/**
	 * The Serializer for the Hipster Model
	 *
	 * @class HipsterSerializer
	 * @extends DS.RESTSerializer
	 */
	App.HipsterSerializer = DS.RESTSerializer.extend({
		/**
		 * Indicates primary key in payload
		 *
		 * @property primaryKey
		 * @type {String}
		 * @default _id
		 */
		primaryKey: '_id'
	});

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
		lastName: DS.attr('string')//,
//        accessories: DS.hasMany('accessory')
	});
});