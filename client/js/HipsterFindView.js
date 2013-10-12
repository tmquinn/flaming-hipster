/* globals Em, App */
/**
 * Created by quinn on 10/5/13.
 */
define([], function () {
	App.HipsterFindView = Em.View.extend({
		didInsertElement: function () {
			this.$('#first-name').focus();
		}
	});
});