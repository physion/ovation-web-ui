define([
	'backbone',
	'hbs!../../templates/addEntityTemplates/AddProjectTemplate',
	'communicator',
	'jqueryui'
	],
	function( Backbone, AddProjectTemplate, Communicator ){
		'use strict';

		return Backbone.View.extend({

			template: AddProjectTemplate,
			
			initialize: function() {
				this.$el.append(this.template());
			},

			render: function() {},

			onShow: function() {
				this.$el.find('.project-start').datepicker();
			},

			'events': {
				'click .submit': function() {
					var name = this.$el.find('.project-name').val();
					var purpose = this.$el.find('.project-purpose').val();
					var start = this.$el.find('.purpose-start').val();
					Communicator.mediator.trigger('CreateEntity:Project', {
						name: name,
						purpose: purpose,
						start: start
					});
					this.$el.find('.project-name').val('');
					this.$el.find('.project-purpose').val('');
				}
			}

		});
	});
