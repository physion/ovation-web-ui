define([
	'backbone',
	'views/ModelNavigatorDefaultPanel',
	'hbs!tmpl/ModelNavigatorPanels'
	],
	function(Backbone, ModelNavigatorDefaultPanelView, ModelNavigatorPanelsTemplate ){
		'use strict';

		return Backbone.View.extend({
			className: 'model-navigator-panels',
			template: ModelNavigatorPanelsTemplate,

			initialize: function() {
				this.$el.append(this.template());
				var container = new Backbone.ChildViewContainer(),

					// By default the panels will will show links for Projects, Sources, and Protocols
					defaultView = new ModelNavigatorDefaultPanelView(),
					viewContainerEl = this.$el.find('.model-navigator-panels-container');

				viewContainerEl.append(defaultView.$el);
				container.add(defaultView);
			},

			events: {
				'click .panel-link': function(e) {
					console.log($(e.currentTarget).attr('href'));
					return false;
				}
			}
		});
	});
