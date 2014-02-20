define([
	'backbone',
	'hbs!tmpl/layout/OvationMain',
	'controllers/ModelNavigator'
	],
	function( Backbone, OvationMainTmpl, ModelNavigatorController ) {
		'use strict';

		/* Return a Layout class definition */
		return Backbone.Marionette.Layout.extend({

			template: OvationMainTmpl,

			initialize: function() {
				this.modelNavigatorController = new ModelNavigatorController({
					model: this.model,
					region: this.modelNavigator
				})
			},

			/* Layout sub regions */
			regions: {
				modelNavigator: '#model-navigator-region'
			},

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {
				this.modelNavigatorController.render();
			}
		});

	});
