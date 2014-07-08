define([
	'backbone',
	'../views/layout/MainLayout',
	'PanelView',
	'jqueryui'
],
function( Backbone, MainLayout, PanelView ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			var layout = new MainLayout(),
				model = options.model,
				region = options.region,
				panelView;

			region.show(layout);

			panelView = new PanelView({
				region: layout.activeViewRegion
			});

			//TODO: figure out why this works here
			region.$el.resizable({ handles: "e" });
		}

	});

});