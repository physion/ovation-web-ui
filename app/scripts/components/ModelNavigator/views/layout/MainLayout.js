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

			initialize: function() {
				var self = this,
					lazyLayout = _.debounce(function() {
						self.resize();
					}, 300);
				$(window).resize(lazyLayout);
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
			onRender: function() {},

			onShowCalled: function() {
				this.resize();
			},

			resize: function() {
				// Resize the navigator region to 100% of the available height
				var totalHeight = this.$el.height(),
					navRegion = this.$el.find('.model-navigator-active-view-region'),
					heightDifference = navRegion.position().top - this.$el.position().top;
				navRegion.height(totalHeight - heightDifference);
			}


		});

	});
