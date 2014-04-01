define([
	'backbone',
	'hbs!../templates/ModelNavigatorPanels'
	],
	function(Backbone, ModelNavigatorPanelsTemplate ){
		'use strict';

		return Backbone.View.extend({
			className: 'model-navigator-panels',
			template: ModelNavigatorPanelsTemplate,

			initialize: function() {
				this.$el.append(this.template());
				this.viewContainerEl = this.$el.find('.model-navigator-panels-container');
			},

			events: {
				'click .panel-link': function(e) {
					var panel = $(e.currentTarget).closest('.model-navigator-panel');
					this.trigger('link-clicked', {
						viewcid: panel.attr('data-cid'),
						href: $(e.currentTarget).attr('href')
					});
					return false;
				}
			}
		});
	});
