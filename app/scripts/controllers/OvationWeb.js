define([
	'backbone',
	'views/layout/OvationWeb',
	'models/OvationData',
	'controllers/DataView',
	'controllers/WelcomeGuideController'
],
function( Backbone, OvationWebLayout, OvationDataModel, DataViewController, WelcomeGuideController ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {

			var ovationDataModel = new OvationDataModel();

			var ovationWebLayout = new OvationWebLayout({
				el: '#app-layout'
			});
			var self = this;
			ovationWebLayout.render();

			$.ajax({
				url: '/api/v1/projects',
				dataType: 'json',
				success: function(data) {
					if(!data.length) {
						var welcomeGuideController = new WelcomeGuideController({
							region: ovationWebLayout.mainContent
						});

						self.listenTo(welcomeGuideController, "showDataView", function() {
							var dataViewController = new DataViewController({
								model: ovationDataModel,
								region: ovationWebLayout.mainContent
							});
						});
					}
					else {
						var dataViewController = new DataViewController({
							model: ovationDataModel,
							region: ovationWebLayout.mainContent
						});
					}
				}
			});

		}
	});

});
