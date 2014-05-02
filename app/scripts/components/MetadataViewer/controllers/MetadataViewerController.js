define([
	'backbone',
	'communicator',
	'../views/layout/MainLayout',
	'../views/MetadataView'
],
function( Backbone, Communicator, MainLayout, MetadataView ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			var self = this,
				layout = new MainLayout(),
				region = options.region,
				metadataView = new MetadataView();

			region.show(layout);
			layout.metadataView.show(metadataView);
		}

	});

});