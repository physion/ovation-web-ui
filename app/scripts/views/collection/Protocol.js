define([
	'backbone',
	'views/item/Protocol'
	],
	function( Backbone, Protocol  ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.CollectionView.extend({

			initialize: function() {
				console.log("initialize a Protocol CollectionView");
			},
			
			itemView: Protocol,
			

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}
		});

	});
