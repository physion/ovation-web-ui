define([
	'backbone',
	'views/item/Protocol'
	],
	function( Backbone, ProtocolView  ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.CollectionView.extend({

			tagName: 'ul',

			initialize: function() {
				console.log("initialize a Protocol CollectionView");
			},

			itemView: ProtocolView,


			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}
		});

	});
