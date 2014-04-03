define([
	'backbone',
	'communicator'
],
function( Backbone, Communicator ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			var self = this;
			Communicator.mediator.on('entity:select', function(entityModel) {
				$('#entity-view-data').text(JSON.stringify(entityModel.toJSON(), undefined, 2));
			})
		}

	});

});