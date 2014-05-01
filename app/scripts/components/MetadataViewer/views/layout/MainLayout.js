define([
	'backbone',
	'hbs!../../templates/layout/MainLayoutTemplate'
	],
	function( Backbone, MainLayoutTemplate  ) {
		'use strict';

		/* Return a Layout class definition */
		return Backbone.Marionette.Layout.extend({
			className: 'metadata-viewer',
			template: MainLayoutTemplate,

			initialize: function() {
			},

			/* Layout sub regions */
			regions: {
				'metadataView': '.metadata-view-wrapper'
			},

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}

		});

	});
