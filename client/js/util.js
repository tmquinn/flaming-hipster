/**
 * Created by quinn on 10/12/13.
 */

/* globals define */

define([], function () {
	"use strict";

	var util = {
		capitaliseFirstLetter: function (string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
	};

	return util;
});