define([
	'backbone',
	'views/layout/DataView',
	'components/ModelNavigator/controllers/ModelNavigator'
],
function( Backbone, DataViewLayout, ModelNavigatorController ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			var dataViewLayout = new DataViewLayout({
				model: options.model
			});
			options.region.show(dataViewLayout);

			var modelNavigatorController = new ModelNavigatorController({
				model: options.model,
				region: dataViewLayout.modelNavigator
			});
		}
	});

});
