define([
	'backbone',
	'hbs!tmpl/layout/WelcomeGuideLayoutTemplate'
	],
	function( Backbone, WelcomeGuideLayoutTemplate  ) {
		'use strict';

		/* Return a Layout class definition */
		return Backbone.Marionette.Layout.extend({

			initialize: function() {},

			template: WelcomeGuideLayoutTemplate,

			/* Layout sub regions */
			regions: {
				main: '#welcome-guide-main'
			},

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}
		});

	});
