define([
	'backbone',
	'hbs!tmpl/ModelNavigatorDefaultPanel'
	],
	function(Backbone, ModelNavigatorDefaultPanel){
		'use strict';

		return Backbone.View.extend({
			className: 'model-navigator-panel',
			template: ModelNavigatorDefaultPanel,
			
			initialize: function() {
				this.$el.append(this.template());
				this.$el.attr('data-cid', this.cid);
			}
		});
	});
