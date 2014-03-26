define([
	'backbone',
	'hbs!tmpl/layout/DataView'
	],
	function( Backbone, DataViewTmpl  ) {
		'use strict';

		/* Return a Layout class definition */
		return Backbone.Marionette.Layout.extend({

			initialize: function() {
				console.log("initialize a Dataview Layout");
			},
			
			template: DataViewTmpl,

			/* Layout sub regions */
			regions: {
				modelNavigator: '#model-navigator-region'
			},

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}
		});

	});
