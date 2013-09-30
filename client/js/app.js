require.config({
    baseUrl: 'js/',

    paths: {
        jquery: 'libs/jquery-1.9.1',
        handlebars: 'libs/handlebars-1.0.0',
        ember: 'libs/ember-1.0.0',
        "ember-data": 'libs/ember-data'
    },

    shim: {
        ember: {
            deps: ['jquery', 'handlebars']
        },
        "ember-data": {
            deps: ['ember']
        }
    }
});

require(['ember-data'], function () {
    App = Ember.Application.create();
    App.deferReadiness();

    DS.RESTAdapter.reopen({
        namespace: 'api/v1'
    });

    App.AccessoriesAdapter = DS.RESTAdapter.extend();

    App.Router.map(function () {
        // put your routes here
    });

    require(['routes/IndexRoute'], function () {
        App.advanceReadiness();
    });
});