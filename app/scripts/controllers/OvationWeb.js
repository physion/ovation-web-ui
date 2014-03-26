define([
	'backbone',
	'views/layout/OvationWeb',
	'models/OvationData',
	'controllers/DataView'
],
function( Backbone, OvationWebLayout, OvationDataModel, DataViewController ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {

			var ovationDataModel = new OvationDataModel();

			var ovationWebLayout = new OvationWebLayout({
				el: '#app-layout'
			});

			ovationWebLayout.render();

			var dataViewController = new DataViewController({
				model: ovationDataModel,
				region: ovationWebLayout.mainContent
			});

		}
	});

});
