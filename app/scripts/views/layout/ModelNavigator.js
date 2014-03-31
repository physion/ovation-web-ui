define([
	'backbone',
	'hbs!tmpl/layout/ModelNavigator'
	],
	function( Backbone, ModelNavigatorTemplate  ) {
		'use strict';

		/* Return a Layout class definition */
		return Backbone.Marionette.Layout.extend({
			className: 'model-navigator',
			template: ModelNavigatorTemplate,

			initialize: function() {
				console.log("initialize a Modelnavigator Layout");
			},

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
