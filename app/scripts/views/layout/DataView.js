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
			onRender: function() {},

			onShowCalled: function() {
				
				// Resize the navigator region to 100% of the available height
				var navRegion = this.$el.find('#model-navigator-region'),
					regionTop = navRegion.position().top;
				navRegion.height($(window).height() -  regionTop);
			}
		});

	});
