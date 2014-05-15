define([
	'backbone',
	'hbs!tmpl/WelcomeGuideStartTemplate',
	'jqueryui'
	],
	function(Backbone, WelcomeGuideStartTemplate ){
		'use strict';

		return Backbone.View.extend({

			template: WelcomeGuideStartTemplate,

			initialize: function() {
				this.$el.append(this.template());
				this.viewContainerEl = this.$el.find('.model-navigator-panels-container');
			},

			onShow: function() {
				$('#welcome-guide-project-startdate').datepicker();
				$('#welcome-guide-project-startdate').datepicker('setDate', new Date());
			},

			events: {
				'click #welcome-guide-create-project': function() {
					this.trigger("createProject", {
						name: $('#welcome-guide-project-name').val(),
						purpose: $('#welcome-guide-project-purpose').val(),
						startDate: $('#welcome-guide-project-startdate').val()
					});
				}
			}
		});
	});
