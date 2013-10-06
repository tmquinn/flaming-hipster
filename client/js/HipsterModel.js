/**
 * Created by quinn on 10/4/13.
 */
define([], function () {

    App.HipsterSerializer = DS.RESTSerializer.extend({
        primaryKey: '_id',

        serialize: function (record, options) {

            var json = this._super(record, options);
            console.log(json);

            return json;
        },

        extractSingle: function(store, primaryType, payload, recordId, requestType) {

            console.log(payload);

            payload.hipster.firstName = payload.hipster.firstName.replace('-toot', '');

            return this._super.apply(this, arguments);
        }

//        toJSON: function
//        serializeIntoHash: function (hash, type, record, options) {
//            console.log(record.toJSON());
//
//            hash[type.typeKey] = this.serialize(record, options);
//        }
    })

    App.Hipster = DS.Model.extend({
        firstName: DS.attr('string'),
        lastName: DS.attr('string')//,
//        accessories: DS.hasMany('accessory')
    });
});