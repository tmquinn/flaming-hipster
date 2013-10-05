/* globals define, App, Em */
/**
 * Created by quinn on 10/5/13.
 */
define([], function () {
    "use strict";

    App.HipsterFindController = Em.Controller.extend({
        actions: {
            findHipsters: function () {
                var query = {},
                    firstName = this.get('firstName'),
                    lastName = this.get('lastName');

                if (firstName || lastName) {
                    query = {
                        firstName: firstName,
                        lastName: lastName
                    };
                }

                this.get('store').find('hipster', query).then(function (results) {
                        this.set('searchResults', results);
                    }.bind(this));
            }
        }
    });
});