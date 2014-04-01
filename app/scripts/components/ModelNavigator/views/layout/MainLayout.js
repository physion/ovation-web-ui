define([
	'backbone',
	'hbs!../../templates/layout/MainLayoutTemplate'
	],
	function( Backbone, MainLayoutTemplate  ) {
		'use strict';

		/* Return a Layout class definition */
		return Backbone.Marionette.Layout.extend({
			className: 'model-navigator',
			template: MainLayoutTemplate,

			initialize: function() {},

			/* Layout sub regions */
			regions: {
				activeViewRegion: '.model-navigator-active-view-region'
			},

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}
		});

	});
