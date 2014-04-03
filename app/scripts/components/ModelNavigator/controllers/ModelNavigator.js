define([
	'backbone',
	'../views/layout/MainLayout',
	'./PanelsController',
	'jqueryui'
],
function( Backbone, MainLayout, PanelsController ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			var layout = new MainLayout(),
				model = options.model,
				region = options.region,
				panelsController;

			region.show(layout);
			panelsController = new PanelsController({
				region: layout.activeViewRegion
			});

			//TODO: figure out why this works here
			region.$el.resizable({ handles: "e" });
		}

	});

});