define([
	'backbone',
	'../item/EntityLinkView'
	],
	function( Backbone, EntityLinkView ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.CollectionView.extend({
			
			tagName: 'ul',
			className: 'model-navigator-entity-links',
			
			initialize: function() {},

			itemView: EntityLinkView,

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}
		});

	});
