define([
	'backbone',
	'hbs!tmpl/WelcomeGuideEntitiesTemplate',
	'jqueryui'
	],
	function(Backbone, WelcomeGuideEntitiesTemplate ){
		'use strict';

		return Backbone.View.extend({

			template: WelcomeGuideEntitiesTemplate,

			initialize: function() {
				this.$el.append(this.template());
			},

			onShow: function() {
				$('#welcome-guide-experiment-start').datepicker();
				$('#welcome-guide-experiment-start').datepicker('setDate', new Date());
				$('#welcome-guide-epoch-group-start').datepicker();
				$('#welcome-guide-epoch-group-start').datepicker('setDate', new Date());
				$('#welcome-guide-epoch-group-end').datepicker();
				$('#welcome-guide-epoch-group-end').datepicker('setDate', new Date());
				$('#welcome-guide-epoch-start').datepicker();
				$('#welcome-guide-epoch-start').datepicker('setDate', new Date());
				$('#welcome-guide-epoch-end').datepicker();
				$('#welcome-guide-epoch-end').datepicker('setDate', new Date());
			},

			events: {
				'click #welcome-guide-finish': function() {
					var experimentName = $('#welcome-guide-experiment-name').val(),
						experimentStart = $('#welcome-guide-experiment-start').val(),
						experimentPurpose = $('#welcome-guide-experiment-purpose').val(),
						eGroupName = $('#welcome-guide-epoch-group-name').val(),
						eGroupStart = $('#welcome-guide-epoch-group-start').val(),
						eGroupEnd = $('#welcome-guide-epoch-group-end').val(),
						epochName = $('#welcome-guide-epoch-name').val(),
						epochStart = $('#welcome-guide-epoch-start').val(),
						epochEnd = $('#welcome-guide-epoch-end').val();

					this.trigger("createEntities", {
						'experiment': {
							'name': experimentName,
							'start': experimentStart,
							'purpose': experimentPurpose
						},
						'epochGroup': {
							'name': eGroupName,
							'start': eGroupStart,
							'end': eGroupEnd
						},
						'epoch': {
							'name': epochName,
							'start': epochStart,
							'end': epochEnd
						}
					});
				}
			}
		});
	});
