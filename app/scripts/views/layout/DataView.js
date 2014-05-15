define([
	'backbone',
	'communicator',
	'hbs!tmpl/layout/DataView',
	'plupload'
	],
	function( Backbone, Communicator, DataViewTmpl  ) {
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
				modelNavigator: '#model-navigator-region',
				entityViewer: '#entity-viewer',
				metadataViewer: '#metadata-viewer'
			},

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {
				'click #plupload-start': function() {
					Communicator.mediator.trigger("uploadFiles");
					return false;
				}
			},

			/* on render callback */
			onRender: function() {},

			onShowCalled: function() {
				this.resize();
			},

			resize: function() {
				
				// Resize the regions to 100% of the available height
				var navRegion = this.$el.find('#model-navigator-region'),
					regionTop = navRegion.position().top,
					availableHeight = $(window).height() -  regionTop,
					entityViewer = this.$el.find('#entity-viewer'),
					margin = entityViewer.css('margin-top');

				navRegion.height(availableHeight);
				margin = margin.replace('px', '');
				entityViewer.height(availableHeight - margin);
			}
		});

	});
