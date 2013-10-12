/*globals require, Ember, DS, App:true, console */

/**
 * Main
 */
require.config({
	baseUrl: 'js/'
});

Ember.RSVP.configure('onerror', function (error) {
	"use strict";
	Ember.Logger.assert(false, error);
});

Ember.Handlebars.helper('lastFive', function (value) {
	"use strict";

	console.log(value);

	if (value.length > 10) {
		value = [
			value.substr(0, 5),
			'...',
			value.slice(value.length - 5)
		].join('');
	}

	return value;
});

App = Ember.Application.create({
//    LOG_TRANSITIONS: true,
//    LOG_TRANSITIONS_INTERNAL: true,
//    LOG_VIEW_LOOKUPS: true,
//    LOG_ACTIVE_GENERATION: true
});
App.deferReadiness();

App.ApplicationAdapter = DS.RESTAdapter.extend({
	namespace: 'api/v1'
});

App.Router.map(function () {
	"use strict";

	console.log(this)

	this.resource('hipster', { path: "/hipster/:verb" });

//    this.resource('hipster', function () {
//        this.route('add');
//        this.route('find');
//        this.route('edit', { path: 'edit/:id'});
//    });
});

require([
	'HipsterRoute',
	'HipsterFindController',
	'HipsterFindView',
], function () {
	"use strict";

	App.advanceReadiness();
});