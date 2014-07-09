define([
	'backbone',
	'hbs!../../templates/item/ProjectViewTemplate',
	'communicator',
	'jqueryui'
	],
	function( Backbone, ProjectViewTemplate, Communicator ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.ItemView.extend({

			tagName: 'div',

			initialize: function() {
				this.listenTo(this.model, 'destroy', function() {
					this.close();
					this.remove();
				});
			},

			template: ProjectViewTemplate,

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {
				'click .delete-project': function() {
					Communicator.mediator.trigger('Entity:Delete', this.model);
				}
			},

			/* on render callback */
			onRender: function() {

			},

			onShow: function() {
				var start = new Date(this.model.get('attributes').get('start'));
				this.$el.find('.project-start')
					.datepicker()
					.datepicker("setDate", start);
			}
		});

	});
