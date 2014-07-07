define([
	'backbone',
	'hbs!../../templates/layout/MainLayoutTemplate'
	],
	function( Backbone, MainLayoutTemplate ) {
		'use strict';

		/* Return a Layout class definition */
		return Backbone.Marionette.Layout.extend({

			className: 'panel-view-layout',

			template: MainLayoutTemplate,

			initialize: function() {
				
			},

			/* Layout sub regions */
			regions: {
				mainRegion: '.panel-view-main-region',
				historyRegion: '.panel-view-history-region'
			},

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {
				'click .history': function() {
					this.historyRegion.$el.slideToggle();
				},
				'click .home': function() {
					this.trigger('showHome');
				}
			},

			/* on render callback */
			onRender: function() {}

		});

	});
