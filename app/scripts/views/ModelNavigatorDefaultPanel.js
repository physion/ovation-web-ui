define([
	'backbone',
	'hbs!tmpl/ModelNavigatorDefaultPanel'
	],
	function(Backbone, ModelNavigatorDefaultPanel){
		'use strict';

		return Backbone.View.extend({
			className: 'model-navigator-default-panel',
			template: ModelNavigatorDefaultPanel,
			
			initialize: function() {
				this.$el.append(this.template());
				console.log("initialize a Modelnavigatordefaultpanel View");
			}
		});
	});
