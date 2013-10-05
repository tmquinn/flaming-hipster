/* globals define, App, Em */
/**
 * Created by quinn on 10/5/13.
 */
define([], function () {
    "use strict";

    App.HipsterFindController = Em.Controller.extend({
        actions: {
            findHipsters: function () {
                this.get('store').find('hipster', {
                    firstName: this.get('firstName'),
                    lastName: this.get('lastName')
                }).then(function (results) {
                        this.set('searchResults', results);
                    }.bind(this));
            }
        }
    });
});