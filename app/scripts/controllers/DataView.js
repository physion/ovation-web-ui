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
			this.dataViewLayout = dataViewLayout;

			var modelNavigatorController = new ModelNavigatorController({
				model: options.model,
				region: dataViewLayout.modelNavigator
			});

			var self = this,
				lazyLayout = _.debounce(function() {
					self.resize();
				}, 300);
			$(window).resize(function() {
				self.resize();
			});

			this.resize();

		},

		resize: function() {
			var availableWidth = this.dataViewLayout.$el.width();
			var entityViewerWidth = availableWidth - $('#model-navigator-region').outerWidth();
			this.dataViewLayout.$el.find('#entity-viewer').outerWidth(entityViewerWidth);
		}
	});

});
