define([
	'backbone',
	'hbs!tmpl/layout/OvationWeb'
	],
	function( Backbone, OvationWebTmpl  ) {
		'use strict';

		/* Return a Layout class definition */
		return Backbone.Marionette.Layout.extend({

			initialize: function() {
				console.log("initialize a Ovationweb Layout");
			},

			template: OvationWebTmpl,

			/* Layout sub regions */
			regions: {
				mainContent: '#main-content'
			},

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}
		});

	});
