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
			
			initialize: function() {
				this.listenTo(this, "itemview:entitylink:click", function(context, entityLinkModel) {
					context.$el.siblings().removeClass('active');
					context.$el.addClass('active');
					this.trigger("entitylink:click", entityLinkModel);
				})
			},

			itemView: EntityLinkView,

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}
		});

	});
