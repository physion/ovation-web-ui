define([
	'backbone',
	'views/layout/DataView',
	'components/ModelNavigator/controllers/ModelNavigator',
	'components/EntityViewer/controllers/EntityViewerController',
	'components/MetadataViewer/controllers/MetadataViewerController'
],
function( Backbone, DataViewLayout, ModelNavigatorController, EntityViewerController, MetadataViewerController ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {

			var dataViewLayout = new DataViewLayout({}),
				modelNavigatorController,
				entityViewController,
				metadataViewerController,
				self = this,
				lazyLayout;

			options.region.show(dataViewLayout);
			this.dataViewLayout = dataViewLayout;

			modelNavigatorController = new ModelNavigatorController({
				region: dataViewLayout.modelNavigator
			});

			entityViewController = new EntityViewerController({
				region: dataViewLayout.entityViewer
			});

			metadataViewerController = new MetadataViewerController({
				region: dataViewLayout.metadataViewer
			});

			lazyLayout = _.debounce(function() {
				self.resize();
			}, 300);
			$(window).resize(function() {
				self.resize();
			});
			this.resize();

		},

		resize: function() {
			var availableWidth = this.dataViewLayout.$el.width(),
				metadataViewerWidth = $('#metadata-viewer').outerWidth(),
				modelNavigatorWidth = $('#model-navigator-region').outerWidth(),
				entityViewerWidth = availableWidth - metadataViewerWidth - modelNavigatorWidth;
			this.dataViewLayout.$el.find('#entity-viewer').outerWidth(entityViewerWidth);
		}
	});

});
