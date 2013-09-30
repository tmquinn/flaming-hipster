/**
 * Created by quinn on 9/29/13.
 */

define(['ember-data'], function () {
    App.Startup = DS.Model.extend({
        time: DS.attr('date')
    });
});