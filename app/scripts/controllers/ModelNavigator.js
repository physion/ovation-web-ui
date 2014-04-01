define([
	'backbone',
	'views/layout/ModelNavigator',
	'controllers/ModelNavigatorPanels'
],
function( Backbone, ModelNavigatorLayout, ModelNavigatorPanelsController ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			var modelNavigatorLayout = new ModelNavigatorLayout(),
				model = options.model,
				region = options.region,
				modelNavigatorPanelsController;

			region.show(modelNavigatorLayout);
			modelNavigatorPanelsController = new ModelNavigatorPanelsController({
				region: modelNavigatorLayout.activeViewRegion
			});
		}

	});

});
