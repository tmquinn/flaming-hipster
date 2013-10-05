require.config({
    baseUrl: 'js/',
});

App = Ember.Application.create();
App.deferReadiness();

App.ApplicationAdapter = DS.RESTAdapter.extend({
    namespace: 'api/v1'
});

App.Router.map(function () {
    this.route('hipster');
});

require(['controllers/HipsterController'], function () {
    App.advanceReadiness();
});