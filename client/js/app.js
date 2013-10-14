/*globals require, Ember, DS, App:true */

var DEBUG = true; // TODO: Set by env

/**
 * Main
 */
require.config({
	baseUrl: 'js/',

	paths: {
		lgtm: 'libs/lgtm'
	}
});

Ember.RSVP.configure('onerror', function (error) {
	"use strict";
	Ember.Logger.assert(false, error);
});

Ember.Handlebars.helper('lastFive', function (value) {
	"use strict";

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

App.ApplicationSerializer = DS.RESTSerializer.extend({
	primaryKey: '_id',

	serializeHasMany: function(record, json, relationship) {
		console.log(record, json, relationship);
	}
});

App.ApplicationAdapter = DS.RESTAdapter.extend({
	namespace: 'api/v1'
});

App.Router.map(function () {
	"use strict";

	this.resource('hipster', function () {
		this.route('add');
		this.route('find');
		this.route('view', { path: ':hipster_id' });
		this.route('edit', { path: ':hipster_id/edit'});
	});
});

//TODO: Make better
var mainDeps = ['HipsterRoute'];
if (DEBUG) {
	var templates = [
		'hipster/add',
		'hipster/edit',
		'hipster/find',
		'hipster/view',
		'application',
		'partialHipster'
	];

	Ember.TEMPLATES = Ember.TEMPLATES || [];

	templates.forEach(function (template) {
		$.ajax('hbs/' + template + '.hbs', 'GET')
			.then(function (result) {
				Ember.TEMPLATES[template] = Ember.Handlebars.compile(result);
			});
	});

} else {
	mainDeps.push('templates');
}

require(mainDeps, function () {
	"use strict";

	App.advanceReadiness();
});

