define([
	'backbone',
	'hbs!../../templates/addEntityTemplates/AddProjectTemplate',
	'EntityModel'
	],
	function( Backbone, AddProjectTemplate, EntityModel ){
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
					var name = this.$el.find('.project-name').val(),
						purpose = this.$el.find('.project-purpose').val(),
						start = this.$el.find('.project-start').val(),
						entityModel = new EntityModel();
					entityModel.set('type', 'Project');
					entityModel.get('attributes').set({
						name: name,
						purpose: purpose,
						start: start
					});
					this.trigger('CreateEntity', entityModel);
					this.$el.find('.project-name').val('');
					this.$el.find('.project-purpose').val('');
				}
			}

		});
	});
