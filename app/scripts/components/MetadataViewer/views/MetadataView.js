define([
	'backbone',
	'communicator',
	'hbs!../templates/MetadataNotesTemplate',
	'hbs!../templates/MetadataTagsTemplate',
	'hbs!../templates/MetadataPropertiesTemplate'
	],
	function(Backbone, Communicator, MetadataNotesTemplate, MetadataTagsTemplate, MetadataPropertiesTemplate ){
		'use strict';

		return Backbone.View.extend({
			className: 'metadata-view',

			initialize: function() {
				var self = this;
				Communicator.mediator.on('entity:select', function(entityModel) {
					console.log(JSON.stringify(entityModel.get('attributes'), undefined, 2));

					self.$el.empty();

					var attributes = entityModel.get('attributes').toJSON();

					self.$el.append(MetadataTagsTemplate(attributes));
					self.$el.append(MetadataPropertiesTemplate(attributes));
					self.$el.append(MetadataNotesTemplate(attributes));


				});
			},

			events: {}
		});
	});