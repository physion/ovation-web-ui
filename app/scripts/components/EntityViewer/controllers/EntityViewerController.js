define([
	'backbone',
	'communicator',
	'../views/layout/MainLayout',
	'../views/item/ProjectView'
],
function( Backbone, Communicator, MainLayout, ProjectView ) {
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
			})
		}

	});

});