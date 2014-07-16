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

				this.listenTo(this.model.get('attributes'), 'change', function() {
					this.$el.find('.save-project').prop('disabled', false);
				});
			},

			template: ProjectViewTemplate,

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {
				'click .delete-project': function() {
					this.trigger('DeleteEntity', this.model);
				},
				'click .lead': function(e) {
					$(e.currentTarget).hide();
					this.$el.find('input.project-name:first').show();

				},
				'blur .project-name': function(e) {
					var newName = $(e.currentTarget).val();
					this.model.get('attributes').set('name', newName);
					$(e.currentTarget).hide();
					this.$el.find('.lead:first').text(newName).show();
					console.log(this.model);
				},

				'click .save-project': function() {
					this.trigger('SaveEntity', this.model);
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
