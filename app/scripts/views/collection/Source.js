define([
	'backbone',
	'views/item/Source'
	],
	function( Backbone, SourceView  ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.CollectionView.extend({

			tagName: 'ul',

			initialize: function() {
				console.log("initialize a Source CollectionView");
			},

			itemView: SourceView,


			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}
		});

	});
