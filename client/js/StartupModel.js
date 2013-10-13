/**
 * Created by quinn on 9/29/13.
 */
/* globals define, App, DS */

define([], function () {
	"use strict";

	App.Startup = DS.Model.extend({
		time: DS.attr('date')
	});
});