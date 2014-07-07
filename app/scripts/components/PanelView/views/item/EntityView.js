define([
	'backbone',
	'hbs!../../templates/item/EntityViewTemplate',
	'hbs!../../templates/item/ProjectTemplate',
	'communicator',
	],
	function( Backbone, EntityViewTemplate, ProjectTemplate, Communicator ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.ItemView.extend({

			tagName: 'a',
			className: 'list-group-item panel-entity',
			template: EntityViewTemplate,

			initialize: function() {},

			events: {
				'click': function() {
					Communicator.mediator.trigger('entity:select', this.model);
				}
			},

			onRender: function() {},


			onShow: function() {
				this.delegateEvents();
			}

		});

	});
