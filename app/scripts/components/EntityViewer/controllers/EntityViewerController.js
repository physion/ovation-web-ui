define([
	'backbone',
	'communicator',
	'../views/layout/MainLayout',
	'../views/item/ProjectView',
	'../views/item/MeasurementView'
],
function( Backbone, Communicator, MainLayout, ProjectView, MeasurementView ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			var self = this,
				layout = new MainLayout(),
				region = options.region;
			region.show(layout);

			Communicator.mediator.on('entity:select', function(entityModel) {
				if(entityModel.get('type') == 'Project') {
					var projectView = new ProjectView({
						model: entityModel
					});
					layout.main.show(projectView);
				}
				if(entityModel.get('type') == 'Measurement') {
					var mView = new MeasurementView({
						model: entityModel
					});
					layout.main.show(mView);
				}
			})
		}

	});

});