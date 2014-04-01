define([
	'backbone',
	'hbs!../templates/DefaultPanelViewTemplate'
	],
	function(Backbone, DefaultPanelViewTemplate){
		'use strict';

		return Backbone.View.extend({
			className: 'model-navigator-panel',
			template: DefaultPanelViewTemplate,
			
			initialize: function() {
				this.$el.append(this.template());
				this.$el.attr('data-cid', this.cid);
			}
		});
	});
