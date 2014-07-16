define([
	'backbone',
	'communicator',
	'../views/layout/MainLayout',
	'../views/item/ProjectView',
	'../views/item/MeasurementView',
	'ovationService'
],
function( Backbone, Communicator, MainLayout, ProjectView, MeasurementView, OvationService ) {
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
					this.listenTo(projectView, 'DeleteEntity', function(entityModel) {
						OvationService.deleteEntity(entityModel);
					});
					this.listenTo(projectView, 'SaveEntity', function(entityModel) {
						OvationService.saveEntity(entityModel);
					})
				}
				if(entityModel.get('type') == 'Measurement') {
					var mView = new MeasurementView({
						model: entityModel
					});
					layout.main.show(mView);
				}
			});

			Communicator.mediator.on('Entity:Delete', function(entityModel) {
				OvationService.deleteEntity(entityModel);
			});

			Communicator.mediator.on('Entity:Save', function(entity) {
				OvationService.saveEntity(entity);
			});
		}

	});

});