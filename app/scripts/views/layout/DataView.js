define([
	'backbone',
	'hbs!tmpl/layout/DataView'
	],
	function( Backbone, DataViewTmpl  ) {
		'use strict';

		/* Return a Layout class definition */
		return Backbone.Marionette.Layout.extend({

			initialize: function() {
				var self = this,
					lazyLayout = _.debounce(function() {
						self.resize();
					}, 300);
				$(window).resize(lazyLayout);
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
				this.resize();
			},

			resize: function() {
				// Resize the navigator region to 100% of the available height
				var navRegion = this.$el.find('#model-navigator-region'),
					regionTop = navRegion.position().top;
				navRegion.height($(window).height() -  regionTop);
			}
		});

	});
