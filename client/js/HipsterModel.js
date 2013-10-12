/**
 * Created by quinn on 10/4/13.
 */
define([], function () {

	App.HipsterSerializer = DS.RESTSerializer.extend({
		primaryKey: '_id'
	})

	App.Hipster = DS.Model.extend({
		firstName: DS.attr('string'),
		lastName: DS.attr('string')//,
//        accessories: DS.hasMany('accessory')
	});
});