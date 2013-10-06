/**
 * Created by quinn on 10/5/13.
 */
define(['HipsterEditController'],
function () {
    App.HipsterEditRoute = Em.Route.extend({
        model: function (params) {
            return this.get('store').find('hipster', params.id);
        }
    });
});