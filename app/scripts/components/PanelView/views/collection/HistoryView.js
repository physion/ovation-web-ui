define([
	'backbone',
	'../item/HistoryItemView'
	],
	function( Backbone, HistoryItemView ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.CollectionView.extend({
			
			tagName: 'ul',
			className: 'history-collection',
			
			initialize: function() {},

			itemView: HistoryItemView,

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}
		});

	});
