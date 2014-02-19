define([
	'backbone',
	'hbs!tmpl/layout/OvationMain',
	'views/layout/ModelNavigator'
	],
	function( Backbone, OvationMainTmpl, ModelNavigatorLayout  ) {
		'use strict';

		/* Return a Layout class definition */
		return Backbone.Marionette.Layout.extend({

			template: OvationMainTmpl,

			initialize: function() {},

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
				this.modelNavigator.show(new ModelNavigatorLayout({ model: this.model }));
			}
		});

	});
