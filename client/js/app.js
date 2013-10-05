/*globals require, Em, App:true */

require.config({
    baseUrl: 'js/'
});

Em.Handlebars.helper('lastFive', function (value) {
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

App = Em.Application.create({});
App.deferReadiness();

App.ApplicationAdapter = DS.RESTAdapter.extend({
    namespace: 'api/v1'
});

App.Router.map(function () {
    this.resource('hipster', function () {
        this.route('add');
        this.route('find');
    });
});

require([
    'routes/HipsterAddRoute',
    'controllers/HipsterFindController',
    'views/HipsterFindView'
], function () {
    App.advanceReadiness();
});