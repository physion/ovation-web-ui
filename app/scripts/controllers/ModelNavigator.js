define([
	'backbone',
	'views/layout/ModelNavigator',
	'views/ModelNavigatorPanels'
],
function( Backbone, ModelNavigatorLayout, ModelNavigatorPanelsView ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			var modelNavigatorLayout = new ModelNavigatorLayout(),
			
				// Default navigator view
				modelNavigatorPanelsView = new ModelNavigatorPanelsView();

			this.model = options.model;
			this.region = options.region;
			this.region.show(modelNavigatorLayout);
			modelNavigatorLayout.activeViewRegion.show(modelNavigatorPanelsView);
		}

	});

});
