define([
	'backbone',
	'hbs!../templates/PanelsViewTemplate'
	],
	function(Backbone, PanelsViewTemplate ){
		'use strict';

		return Backbone.View.extend({
			className: 'model-navigator-panels',
			template: PanelsViewTemplate,

			initialize: function() {
				this.$el.append(this.template());
				this.viewContainerEl = this.$el.find('.model-navigator-panels-container');
			},

			events: {}
		});
	});
