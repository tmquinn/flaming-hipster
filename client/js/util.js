/**
 * Created by quinn on 10/12/13.
 */

/* globals define */

define([], function () {
	"use strict";

	/**
	 * Utilities
	 *
	 * @class util
	 */
	var util = {
		/**
		 * Capitalize first letter of a string
		 * @method capitaliseFirstLetter
		 * @param {String} string The string to capitalize
		 * @returns {String}
		 */
		capitaliseFirstLetter: function (string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
	};

	return util;
});